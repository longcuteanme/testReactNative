const initialState = {
  hoTen: 'no name',
  email: '',
  soDT: '',
  maNhom: '',
  maLoaiNguoiDung: 'KhachHang',
  accessToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'setInfo': {
      return {
        ...state,
        ...action.payload.userInfo,
      };
    }
    default: {
      return state;
    }
  }
};
