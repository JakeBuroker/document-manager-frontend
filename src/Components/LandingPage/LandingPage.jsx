import FileUpload from "../FileUpload/FileUpload";

function LandingPage() {
    return (
      <div>
        <h1>Welcome to the Document Manager</h1>
        <p>Upload, OCR, and manage your documents easily.</p>
        <FileUpload/>
      </div>
    );
  }
  
  export default LandingPage;
  