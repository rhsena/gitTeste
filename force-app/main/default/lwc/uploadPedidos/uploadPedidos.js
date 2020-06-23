import { LightningElement, api } from 'lwc';

export default class UploadPedidos extends LightningElement {

    @api
    myRecordId;
    

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }

    handleUploadFinished(event) {
        alert(JSON.stringify(event.detail.files));
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            // O arquivo de texto será impresso aqui
            console.log(event.target.result);
        };
        // Get the list of uploaded files
        ///const uploadedFiles = event.detail.files;
        //alert("No. of files uploaded : " + uploadedFiles.length);
    }

}