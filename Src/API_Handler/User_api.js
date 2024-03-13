import ApiManager from './Api_Manager';

export const User_Login = async (email, name, password) => {
  try {
    const response = await ApiManager('/auth/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, name, password}),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const User_Register = async (email, name, password) => {
  try {
    const response = await ApiManager('/auth/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, name, password}),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const Submit_Form_Data = async (latitude, longitude, image) => {
  try {
    const token = ''; 
    const formData = new FormData();
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    const response = await ApiManager('/form', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const Retrieve_Data = async () => {
  try {
    const token = ''; 
    const response = await ApiManager('/data', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

