import * as api from '@/api/api';
const getUserId = {
    methods: {
        getUserId() {
            this.id = this.$route.query.memberId || JSON.parse(sessionStorage.getItem('memberId'));
        }
    }
};
// 分页
const myMixinTable = {
    data() {
        return {
            page: {
                currentPage: 1,
                totalPage: 0
            }
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.page.currentPage = val;
            this.getList(val);
        },
        getTbaleHeight() {
            const winHeight = window.screen.availHeight - 520;
            this.height = winHeight;
        }
    }
};
// 数据字典
const queryDictonary = {
    data() {
        return {
            dicNum: 0,
            divDKey: '',
            tmpAxiosData: ''
        };
    },
    methods: {
        async queryDictonary(dKey = 1) {
            this.divDKey = dKey;
            await this.$axios.post(api.queryDictionaryDetailsType, { dType: dKey }).then(res => {
                this.tmpAxiosData = res.data.data;
            }).catch(err => {
                this.dicNum++;
                if (this.dicNum < 3) {
                    this.queryDictonary(this.divDKey);
                }
            });
        }
    }
};
export { getUserId, myMixinTable, queryDictonary };
