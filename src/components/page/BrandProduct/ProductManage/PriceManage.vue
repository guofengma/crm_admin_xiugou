<template>
    <div>
        <v-breadcrumb :nav='nav'></v-breadcrumb>
        <el-card :body-style="{ padding: '20px 45px' }">
            <el-table :data="tableData" border>
                <!--<el-table-column prop="spec" label="规格" align="center"></el-table-column>-->
                <template v-for='(v,k) in headData'>
                    <el-table-column
                        :show-overflow-tooltip="true"
                        :prop="v.value"
                        :label="v.name"
                        :key="k"
                        align="center">
                    </el-table-column>
                </template>
                <el-table-column label="唯一识别码" align="center">
                    <template slot-scope="scope">
                        <el-input :disabled="scope.row.isDisabled" v-model="scope.row.skuCode"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="原价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.originalPrice"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V0价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v0"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V1价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v1"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V2价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v2"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V3价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v3"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V4价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v4"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V5价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v5"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="V6价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.v6"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="最低支付价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.minPayment"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="拼店价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.groupPrice"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="结算价" align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.settlementPrice"></el-input>
                    </template>
                </el-table-column>
                <el-table-column label="库存单位" align="center" :render-header="renderHeader">
                    <template slot-scope="scope">
                        <span>{{unitName}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button :loading="btnLoading" :type="scope.row.btnStyle" @click="saveMsg(scope.row)">保存
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

    </div>
</template>

<script>
    import vBreadcrumb from '@/components/common/Breadcrumb.vue';
    import request from '@/http/http';

    export default {
        components: {
            vBreadcrumb
        },

        data() {
            return {
                nav: ['品牌产品管理', '产品管理', '价格管理'],
                btnLoading: false,
                productId: '',
                tableData: [],
                unit: '包',
                unitArr: [
                    { label: '包', value: '包' },
                    { label: '箱', value: '箱' },
                    { label: '件', value: '件' },
                    { label: '条', value: '条' },
                    { label: '盒', value: '盒' },
                    { label: 'KG', value: 'KG' },
                    { label: '吨', value: '吨' },
                    { label: '平米', value: '平米' },
                    { label: '立方', value: '立方' }
                ],
                headData: [], // 规格表头
                btnStyle: 'primary'
            };
        },

        computed: {
            unitName() {
                let u = '';
                this.unitArr.forEach((v, k) => {
                    if (v.value == this.unit) {
                        u = v.label;
                    }
                });
                return u;
            }
        },

        activated() {
            this.productId = this.$route.query.priceManageId || sessionStorage.getItem('priceManage');
            this.getProductInfo();
        },

        methods: {
            // 获取产品信息
            getProductInfo() {
                this.tableData = [];
                request.queryProductSpecPriceList({ productId: this.productId }).then(res => {
                    res.data.forEach((v, k) => {
                        v.btnStyle = 'primary';
                        this.unit = v.stockUnit;
                        v.isDisabled = !!v.skuCode;
                        this.tableData.push(v);
                        this.headData = [];
                        if (!v.specType || !v.spec) return;
                        const specs = v.specType.split('-');
                        const specValues = v.spec.split('-');
                        specs.forEach((v1, k1) => {
                            const temp = {
                                value: v1,
                                name: v1
                            };
                            this.headData.push(temp);
                            this.tableData[k][v1] = specValues[k1];
                        });
                    });
                }).catch(err => {
                    console.log(err);
                });
            },
            // 保存表单信息
            saveMsg(row) {
                row.originalPrice = Number(row.originalPrice || 0);
                row.v0 = Number(row.v0 || 0);
                row.v1 = Number(row.v1 || 0);
                row.v2 = Number(row.v2 || 0);
                row.v3 = Number(row.v3 || 0);
                row.v4 = Number(row.v4 || 0);
                row.v5 = Number(row.v5 || 0);
                row.v6 = Number(row.v6 || 0);
                row.groupPrice = Number(row.groupPrice || 0);
                row.minPayment = Number(row.minPayment || 0);
                row.settlementPrice = Number(row.settlementPrice || 0);
                if (!(row.originalPrice >= row.v0 && row.v0 >= row.v1 && row.v1 >= row.v2 && row.v2 >= row.v3 && row.v3 >= row.v4 && row.v4 >= row.v5 && row.v5 >= row.v6 && row.v6 >= row.minPayment && row.minPayment >= row.groupPrice && row.groupPrice >= row.settlementPrice)) {
                    this.$message.warning('参数填写有误,请输入正确的参数');
                    return;
                }
                row.stockUnit = this.unit;
                this.btnLoading = true;

                request.updateProductPrice(row).then(res => {
                    this.$message.success(res.msg);
                    this.btnLoading = false;
                    row.btnStyle = 'success';
                }).catch(err => {
                    this.btnLoading = false;
                    console.log(err);
                });
            },
            // 表头下拉框改变
            tableHeadChange(value) {
                this.unit = value;
            },
            // 表头处理
            renderHeader(h, { column, $index }) {
                return [
                    h(
                        'div',
                        {
                            style: {
                                // margin: '8px -20px 0 0'
                            }
                        },
                        ['库存单位']
                    ),
                    h(
                        'el-select',
                        {
                            style: {
                                display: 'block',
                                width: '100px',
                                'margin-top': '8px'
                            },
                            attrs: {
                                value: this.unit,
                                placeholder: ''
                            },
                            on: {
                                change: this.tableHeadChange
                            }
                        },
                        this.unitArr.map((v, k) => {
                            return h('el-option', {
                                attrs: {
                                    label: v.label,
                                    value: v.value
                                }
                            });
                        })
                    )
                ];
            }
        }
    };
</script>
<style lang='less' scoped>
</style>
