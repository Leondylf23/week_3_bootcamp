import AES from "crypto-js/aes"

export const convertDate = (date) => {
    try {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    } catch (error) {
        return "";
    }
}
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const encryptDataAES = (data) => {
    return AES.encrypt(data, "secret").toString();
};