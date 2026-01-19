import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: "https://practice-project-seven-nu.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosPublic;
};

export default useAxiosSecure;