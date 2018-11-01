// 仓库存货数详情, sku列表
export const getSPUList = '/warehouse/stock/SPUList';
// 仓库存货数spu列表
export const SKUListByProductId = '/warehouse/stock/SKUListByProductId';

// 插入或者删除
export const addOrUpdateRepertory = '/warehouse/addOrUpdate';
// 设置地区对应的仓库
export const areaOption = '/warehouse/areaOption';
// 获取地区仓库设置列表
export const areaWarehouseList = ['/warehouse/areaWarehouseList', { methods: 'get' }];
// 根据code和name查询仓库
export const findWarehouseLike = ['/warehouse/findWarehouseLike', { methods: 'get' }];
// 获取仓库byid
export const queryRepertoryById = ['/warehouse/queryById', { methods: 'get' }];
// 获取仓库列表
export const queryRepertoryList = '/warehouse/queryList';
// 启用停用
export const startOrStopRepertory = ['/warehouse/startOrStop', { methods: 'get' }];

// 入库单
// 添加或修改入库单
export const addOrUpdateReport = '/goods/addOrUpdate';
// 批量修改入库单detail(三方对接接口)
export const batchUpdateDetails = '/goods/batchUpdateDetails';
// 获取入库单列表
export const getNoteList = '/goods/getNoteList';
// 根据id获取SKU
export const getSKUById = '/goods/getSKUById';
// 入库单处获取sku列表(商品规格)
export const SKUList = '/goods/SKUList';
// 入库单处获取spu列表
// export const SPUList = '/goods/SPUList';
