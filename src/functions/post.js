import axios from "axios";
export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const reactPost = async (postId, react, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/reactPost`,
      {
        postId,
        react,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const getReacts = async (postId, token) => {
  try {
    const { data } = await axios.get(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/getReacts/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const comment = async (postId, comment, image, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/comment`,
      {
        postId,
        comment,
        image,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const savePost = async (postId, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/savePost/${postId}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const deletePost = async (postId, token) => {
  try {
    const { data } = await axios.delete(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/deletePost/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
