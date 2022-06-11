import React from "react";
import CreateQuestionsField from "../SelectLanguageInput";

function CreateRequestsPage(props) {
  return (
    <div style={{ marginTop: "-50px" }}>
      <div>
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundImage:
              "url(https://www.performanceexcellencenetwork.org/pensights/wp-content/uploads/2021/02/questions1.jpg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div style={{ height: "100%" }}>
            <div
              style={{
                fontSize: "27px",
                padding: "20px 70px 0 70px",
                textAlign: "center",
              }}
            >
              So you can send your question by filling in the following fields
              on our page, any of your questions will not go unanswered on this
              platform ...
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CreateQuestionsField />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateRequestsPage;
