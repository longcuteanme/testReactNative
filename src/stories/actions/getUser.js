import axios from 'axios';

export const getUser = async dispatch => {
  try {
    const {data} = await axios({
      method: 'post',
      url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap',
      data: {
        taiKhoan: '121212ddd',
        matKhau: '12345678',
      },
    });
    if (data) {
      dispatch({
        type: 'setInfo',
        payload: {
          userInfo: data.content,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
};
