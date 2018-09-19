// 获取一二级类目列表
export const getCategoryList = '/admin/productCategory/queryProductCategoryPageList';
// 获取用户层级列表
export const getDealerLevelList = '/admin/giftBag/queryUserLevel ';
// 获取所有标签
export const queryTagLibraryList = '/admin/tagLibrary/queryTagLibraryList';

// 获取礼包列表
export const queryGiftBagPageList = '/admin/giftBag/queryGiftBagPageList';
// 礼包审核
export const checkGiftBag = '/admin/giftBag/checkGiftBag';
// 礼包上下架
export const giftBagUpOrDown = '/admin/giftBag/giftBagUpOrDown';
// 批量删除
export const batchDeleteGiftBag = '/admin/giftBag/batchDeleteGiftBag';
// 批量下架
export const batchSoldOutGiftBag = '/admin/giftBag/batchSoldOutGiftBag';

// 查询参考价
export const queryReferencePrice = '/admin/giftBag/queryReferencePrice';
// 模糊查询产品
export const findProductInfo = '/admin/giftBag/findProductInfo';
// 根据产品ID查询规格列表
export const queryProductSpecById = '/admin/giftBag/queryProductSpecById';
// 添加礼包产品
export const addGiftBagProduct = '/admin/giftBag/addGiftBagProduct';
// 获取礼包产品信息
export const queryGiftBagProductById = '/admin/giftBag/queryGiftBagProductById';
// 根据id删除产品礼包信息
export const deleteGiftBagProductById = '/admin/giftBag/deleteGiftBagProductById';
// 价格添加
export const priceControl = '/admin/giftBag/priceControl';
// 价格回显
export const queryPriceEcho = '/admin/giftBag/queryPriceEcho';

// 经验值设置
export const setExperience = '/admin/giftBag/setExperience';
// 经验值回显
export const findExpById = '/admin/giftBag/findExpById';

// 礼包详情
export const getGiftBagDetail = '/admin/giftBag/getGiftBagDetail';

// 添加礼包
export const addGiftBag = '/admin/giftBag/addGiftBag';
// 根据id获取礼包详情
export const findGiftBagById = '/admin/giftBag/findGiftBagById';
// 编辑礼包
export const updateGiftBag = '/admin/giftBag/updateGiftBag';

// 根据id获取礼包优惠券列表
export const queryCouponListByGiftBagId = '/admin/giftBag/queryCouponListByGiftBagId';
// 根据id删除礼包优惠券
export const deleteCouponByCouponId = '/admin/giftBag/deleteCouponByCouponId';
// 获取优惠券列表
export const queryCouponList = '/admin/giftBag/queryCouponList';
// 添加优惠券
export const couponControl = '/admin/giftBag/couponControl';
// 添加新标签
export const addTagLibrary = '/admin/tagLibrary/addTagLibrary';
// 编辑产品，根据id获取产品信息
export const findProductAllDataById = '/admin/product/findProductAllDataById';
// 删除规格
export const deleteSaleSpecValue = '/admin/saleSpecValue/deleteSaleSpecValue';
// 提交产品规格
export const addProductSpec = '/admin/price/addProductSpec';
// 获取产品价格
export const queryProductPriceSaleSpecList = '/admin/price/queryProductPriceSaleSpecList';
// 获取库存列表
export const queryProductStockList = '/admin/price/queryProductStockList';
// 保存库存信息
export const updateProductStock = '/admin/price/updateProductStock';
// 产品审核操作
export const updateProductStatus = '/admin/product/updateProductStatus';
// 产品上架/下架操作
export const updateProductShelves = '/admin/product/updateProductShelves';

// 根据二级分类查询参数
export const infoParmByCategoryId = '/admin/infoParm/infoParmByCategoryIdList';
// 省市区接口

// 根据市code获取区
export const getAreaList = '/admin/area/getAreaList';
// 根据省code获取市
export const getCityList = '/admin/area/getCityList';
// 获取省接口
export const getProvinceList = '/admin/area/getProvinceList';

// 查看详情
export const findFreightTemplateById = '/admin/freightTemplate/findFreightTemplateById';
// 修改邮费模板
export const updateFreightTemplateById = '/admin/freightTemplate/updateFreightTemplateById';
// 删除运费模板接口
export const deleteFreightTemplateById = '/admin/freightTemplate/deleteFreightTemplateById';

//* ******************************************************************************************************************
// 运费模版
// 查询列表
export const queryFreightTemplateList = '/product/freightTemplate/queryFreightTemplateList';
// 添加运费模板接口
export const addFreightTemplate = '/product/freightTemplate/addFreightTemplate';
// 根据分区获取省市区
export const getProvinceListGroupByDistrict = ['/config/sysArea/getProvinceListGroupByDistrict', { methods: 'get' }];

// 品牌管理
// 产品品牌列表
export const getProductBrandList = '/product/productBrand/queryProductBrandList';
// 查看品牌
export const findProductBrand = ['/product/productBrand/findProductBrand', { methods: 'get' }];
// 新增产品品牌
export const addProductBrand = '/product/productBrand/addProductBrand';
// 删除产品品牌
export const deleteProductBrand = ['/product/productBrand/deleteProductBrand', { methods: 'get' }];

// 产品分类
// 查询产品品类列表
export const queryProductCategoryList = '/product/productCategory/queryProductCategoryList';
// 新增产品品类
export const addProductCategory = '/product/productCategory/addProductCategory';
// 修改产品品类
export const modifyProductCategory = '/product/productCategory/modifyProductCategory';
// 删除品类
export const deleteProductCategory = ['/product/productCategory/deleteProductCategory', { methods: 'get' }];
// 查看产品品类
export const findProductCategory = '/product/productCategory/findProductCategory';

// 产品详情参数
// 产品详情参数列表
export const queryProductCategoryParamList = ['/product/productCategoryParam/queryProductCategoryParamList', { methods: 'get' }];
// 新增产品详情参数
export const addProductCategoryParam = '/product/productCategoryParam/addProductCategoryParam';
// 删除产品详情参数
export const deleteProductCategoryParam = ['/product/productCategoryParam/deleteProductCategoryParam', { methods: 'get' }];
export const addProduct = '/product/product/addProduct'; // 添加产品
export const queryProductPageList = ['/product/product/queryProductPageList', { methods: 'post' }]; // 查询产品列表
export const findProductBrandListNoStop = ['/product/productBrand/findProductBrandList', { methods: 'get' }]; // 查询品牌列表，不含停用
export const findByBrandId = ['/product/productSupplierBrand/findByBrandId', { methods: 'get' }]; // 根据品牌ID查询供应商列表
export const findBySupplierId = ['/product/productSupplierBrand/findBySupplierId', { methods: 'get' }]; // 根据供应商ID查询品牌列表
export const findProductById = ['/product/product/findProductById', { methods: 'get' }]; // 查询产品详情
export const updateProduct = ['/product/product/updateProduct', { methods: 'post' }]; // 修改产品信息
export const queryProductSpecList = ['/product/productSpecPrice/queryProductSpecPriceList', { methods: 'get' }]; // 获取产品规格列表
export const addSaleSpecValue = '/product/productSpec/addProductSpec'; // 添加规格
export const updateProductSpec = '/product/productSpecPrice/updateProductSpec'; // 修改规格
export const addProductSpecPrice = '/product/productSpecPrice/addProductSpecPrice'; // 添加产品规格价格
export const updateProductStatusById = '/product/product/updateProductStatusById'; // 修改产品状态
export const updateBatchProductStatus = '/product/product/updateBatchProductStatus'; // 批量下架删除产品
export const updateProductPrice = '/product/productSpecPrice/updateProductPrice'; // 保存产品价格
export const queryProductSpecPriceList = ['/product/productSpecPrice/queryProductSpecPriceList', { methods: 'get' }]; // 查询产品价格列表
export const queryProductSpecStockList = ['/product/productSpecStock/queryProductSpecStockList', { methods: 'get' }]; // 查询产品库存列表
export const addProductSpecStock = ['/product/productSpecStock/addProductSpecStock', { methods: 'post' }]; // 添加产品库存
export const updateProductSpecStock = ['/product/productSpecStock/updateProductSpecStock', { methods: 'post' }]; // 修改产品库存
export const findProductDetailsById = ['/product/product/findProductDetailsById', { methods: 'get' }]; // 查看产品详情

