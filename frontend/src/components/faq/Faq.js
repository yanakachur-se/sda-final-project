import React from "react";
import '../../style/Faq.css';


function Faq() {
  return (

    <div class="container py-3">
    <div class="row">
        <div class="col-10 mx-auto">
            <div class="accordion" id="faqExample">
                <div class="card">
                    <div class="card-header p-2" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link question-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              How can I post a service ?
                            </button>
                          </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqExample">
                        <div class="card-body">
                            Fill the Service form with the following data, choose the type of outdoor service which you want to provide, 
                            location, a brief description and submit it
                            
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingTwo">
                        <h5 class="mb-0">
                        <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How can I check for the available events ?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                        <div class="card-body">
                            Go to 'Services' tab in the navigation bar and select the service of your choice. It will list the available events. 
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Will the customer be notified when the event gets cancelled ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faqExample">
                        <div class="card-body">
                            Yes, the customer will receive the notification over the registered e-mail address
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              How can I check for the exact location of the event ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#faqExample">
                        <div class="card-body">
                            The service provider will reach the customer and set the exact location after the customer booked for the service
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                What are the essentials to bring with me ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#faqExample">
                        <div class="card-body">
                            Check the event description
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingSix">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Do I need to register to book for an event ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                        <div class="card-body">
                            Yes, registration is must for anyone to check and book for the available events
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header p-2" id="headingSeven">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed question-link" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                How can I book for an event ?
                            </button>
                          </h5>
                    </div>
                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSix" data-parent="#faqExample">
                        <div class="card-body">
                            Select a Service under Services Tab and click on See details. You will be redirected to individual service details page where you can book for an event
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
   
</div>

  );
}


export default Faq;