declare namespace API {
  type addParams = {
    name: string;
  };

  type BaseResponseBiResponse = {
    code?: number;
    data?: BiResponse;
    message?: string;
  };

  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseChart = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type BaseResponseInteger = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseLoginUserVO = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponsePageChart = {
    code?: number;
    data?: PageChart;
    message?: string;
  };

  type BaseResponsePagePost = {
    code?: number;
    data?: PagePost;
    message?: string;
  };

  type BaseResponsePagePostVO = {
    code?: number;
    data?: PagePostVO;
    message?: string;
  };

  type BaseResponsePageUser = {
    code?: number;
    data?: PageUser;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponsePostVO = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponseString = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BiResponse = {
    genChart?: string;
    genResult?: string;
    chartId?: string;
  };

  type Chart = {
    id?: string;
    name?: string;
    goal?: string;
    chartData?: string;
    chartType?: string;
    genChart?: string;
    genResult?: string;
    status?: string;
    execMessage?: string;
    userId?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type ChartAddRequest = {
    name?: string;
    goal?: string;
    chartData?: string;
    chartType?: string;
  };

  type ChartEditRequest = {
    id?: string;
    name?: string;
    goal?: string;
    chartData?: string;
    chartType?: string;
  };

  type ChartQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: string;
    name?: string;
    goal?: string;
    chartType?: string;
    userId?: string;
  };

  type ChartUpdateRequest = {
    id?: string;
    name?: string;
    goal?: string;
    chartData?: string;
    chartType?: string;
    genChart?: string;
    genResult?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type DeleteRequest = {
    id?: string;
  };

  type genChartByAiAsyncMqParams = {
    genChartByAiRequest: GenChartByAiRequest;
  };

  type genChartByAiParams = {
    genChartByAiRequest: GenChartByAiRequest;
  };

  type GenChartByAiRequest = {
    name?: string;
    goal?: string;
    chartType?: string;
  };

  type genChartByBigAiAsyncMqParams = {
    genChartByAiRequest: GenChartByAiRequest;
  };

  type getChartByIdParams = {
    id: string;
  };

  type getPostVOByIdParams = {
    id: string;
  };

  type getUserByIdParams = {
    id: string;
  };

  type getUserVOByIdParams = {
    id: string;
  };

  type LoginUserVO = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageChart = {
    records?: Chart[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PagePost = {
    records?: Post[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PagePostVO = {
    records?: PostVO[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PageUser = {
    records?: User[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: string;
    size?: string;
    current?: string;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    countId?: string;
    maxLimit?: string;
    pages?: string;
  };

  type Post = {
    id?: string;
    title?: string;
    content?: string;
    tags?: string;
    thumbNum?: number;
    favourNum?: number;
    userId?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type PostAddRequest = {
    title?: string;
    content?: string;
    tags?: string[];
  };

  type PostEditRequest = {
    id?: string;
    title?: string;
    content?: string;
    tags?: string[];
  };

  type PostFavourAddRequest = {
    postId?: string;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    postQueryRequest?: PostQueryRequest;
    userId?: string;
  };

  type PostQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: string;
    notId?: string;
    searchText?: string;
    title?: string;
    content?: string;
    tags?: string[];
    orTags?: string[];
    userId?: string;
    favourUserId?: string;
  };

  type PostThumbAddRequest = {
    postId?: string;
  };

  type PostUpdateRequest = {
    id?: string;
    title?: string;
    content?: string;
    tags?: string[];
  };

  type PostVO = {
    id?: string;
    title?: string;
    content?: string;
    thumbNum?: number;
    favourNum?: number;
    userId?: string;
    createTime?: string;
    updateTime?: string;
    tagList?: string[];
    user?: UserVO;
    hasThumb?: boolean;
    hasFavour?: boolean;
  };

  type uploadFileParams = {
    uploadFileRequest: UploadFileRequest;
  };

  type UploadFileRequest = {
    biz?: string;
  };

  type uploadImageAnalysisParams = {
    uploadImageRequest: UploadImageRequest;
  };

  type UploadImageRequest = {
    biz?: string;
    goal?: string;
  };

  type User = {
    id?: string;
    userAccount?: string;
    userPassword?: string;
    userName?: string;
    userAvatar?: string;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddRequest = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    userRole?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: string;
    unionId?: string;
    mpOpenId?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserUpdateMyRequest = {
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    id?: string;
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    createTime?: string;
  };
}
