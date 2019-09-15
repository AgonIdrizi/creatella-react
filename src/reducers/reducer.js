export const reducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return {
        ...state,
        data: [...action.payload],
        preFetchedData: [],
        isLoading: false,
        currentPage: 2,
      };
    case 'startLoadWithSort':
      return {
        data: [],
        isLoading: true,
        preFetchedData: [],
        isPreFetching: false,
        currentPage: 1,
        lastAddsNumber: 0,
        errorMessage: '',
      };
    case 'preFetch':
      return {
        ...state,
        preFetchedData: action.payload,
        isPreFetching: false,
      };
    case 'setIsFetching': {
      return {
        ...state,
        isPreFetching: true
      };
    }
    case 'bottom':
      //currentPage keeps track of what should be our page to preFetch data 'api/products?_page=1'
      //we update currentPage, only when user scrolls at the bottom and we are not in process of preFetching data
      //e.g. when we dispatch the bottom action in handleScroll function,
      //we dont want to update currentPage if we are in the procces of preFetching data
      const currentPage = state.isPreFetching
        ? state.currentPage
        : state.currentPage + 1;
      return {
        ...state,
        data: [...state.data, ...state.preFetchedData],
        preFetchedData: [],
        currentPage: currentPage,
      };

    case 'addsLastNumber':
      return {
        ...state,
        lastAddsNumber: action.payload,
      };
    case 'error':
      return {
        ...state,
        isLoading: false,
        isPreFetching: false,
        errorMessage:
          'Opss, something went wrong, try re-loading in few seconds!',
      };
    default:
      throw new Error();
  }
};
