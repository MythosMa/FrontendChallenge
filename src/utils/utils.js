// 根据key-value值查找对象在数组中的索引
export const findIndexByKeyValue = (array, key, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
};

// graphql->根据翻页信息计算翻页api的参数
export const getPaginationPageVariable = (toPage, currentPage, pageInfo) => {
  let changePages = toPage - currentPage;
  let variable = {};
  if (changePages > 0) {
    let currentLastDataCursor = pageInfo.pageInfo.endCursor;
    let cursorName = window.atob(currentLastDataCursor).split(":")[0];
    let index =
      parseInt(window.atob(currentLastDataCursor).split(":")[1]) +
      (changePages - 1) * pageInfo.pageSize;
    variable = {
      first: pageInfo.pageSize,
      after: window.btoa(cursorName + ":" + index),
      before: undefined,
      last: undefined,
    };
  } else {
    let currentLastDataCursor = pageInfo.pageInfo.startCursor;
    let cursorName = window.atob(currentLastDataCursor).split(":")[0];
    let index =
      parseInt(window.atob(currentLastDataCursor).split(":")[1]) +
      (changePages + 1) * pageInfo.pageSize;
    variable = {
      last: pageInfo.pageSize,
      before: window.btoa(cursorName + ":" + index),
      first: undefined,
      after: undefined,
    };
  }
  return variable;
};
