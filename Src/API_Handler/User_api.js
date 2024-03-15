import ApiManager from './Api_Manager';

export const User_Login = (email, password) => {
  return ApiManager('/auth/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
  });
};

export const User_Register = (email, name, password) => {
  return ApiManager('/auth/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, name, password}),
  });
};

export const Submit_Form_Data = async (
  latitude,
  longitude,
  imageUrl,
  token,
) => {
  try {
    const formData = new FormData();
    formData.append('latitude', latitude.toString());
    formData.append('longitude', longitude.toString());
    formData.append('file', {
      uri: imageUrl,
      filename :'image',
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    const response = await fetch('/form', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Failed to submit form');
    }
  } catch (error) {
    throw new Error(
      error.message || 'An error occurred while submitting the form',
    );
  }
};

export const Retrieve_Data = token => {
  return ApiManager('/data', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
