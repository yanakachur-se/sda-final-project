import Api from "./Api";

class FileApi {

    getImage(fileId) {
        return Api.get(`/downloadFile/`)  
    } 
    uploadImage(file) {
        return Api.post(`/uploadFile/`, file, { headers: { 'Content-Type': 'multipart/form-data' }})
    }

}

export default new FileApi();
