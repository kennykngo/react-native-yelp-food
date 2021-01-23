import axios from "axios";

// create an instance of axios with some presets assigned
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer MMMQuWnLGwlTYdSMtKujs774rvSF8-g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD-_CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx",
    //   "Bearer r4bAJ277bxQmjRtGP0gw31zm3SozfWgIMCiv3_pgV2CeIMDINbzpmHObpoNd4E1ArnG-esOCCcQQbhqlYbNdzMRH60kG33CxxpckFAL5zjZjrlmPjhJXEaCjul4LYHYx",
  },
});
