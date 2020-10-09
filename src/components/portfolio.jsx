import React from 'react';

import Chatbook from "../img/chatbook.jpg"

//aguadeluz pics
import aguaDeLuz from "../img/aguaDeLuz.png";
import aguaDeLuz1 from "../img/aguaDeLuz-1.png";
import aguaDeLuz2 from "../img/aguaDeLuz-2.png";
import aguaDeLuz3 from "../img/aguaDeLuz-3.png";
import aguaDeLuz4 from "../img/aguaDeLuz-4.png";

//import todo
import todoList from "../img/todolist.png";
import todoList1 from "../img/todo-1.png";
import todoList2 from "../img/todo-2.png";
import todoList3 from "../img/todo-3.png";

//import amtbw
import amtbw from "../img/amtbw.png";

//import medlingos
import medlingos from "../img/medlingos.jpg";
import medlingos1 from "../img/medlingos-1.jpg";
import medlingos2 from "../img/medlingos-2.jpg";
import medlingos3 from "../img/medlingos-3.jpg";
import medlingos4 from "../img/medlingos-4.jpg";

//import landing page
import product from "../img/product.png";

class Portfolio extends React.Component{

    render(){
        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out My Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                <div className="work-box" data-toggle="modal" data-target="#chatbook">
                  <div className="work-img">
                    <img className="card-img-top" src={Chatbook} alt="Chatbook"/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Chatbook (Ongoing)</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                </div>

                {/* -- Modal -- */}
                <div class="modal fade" id="chatbook" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                 <div class="modal-dialog modal-dialog-centered" role="document">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                       </button>
                     </div>
                     <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-md-4">
                  <div className="work-box">
                    <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                      <div className="work-img">
                        <img src={aguaDeLuz} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Agua De Luz</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack SmoothScrolling  VanillaJS</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={aguaDeLuz1} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz2} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz3} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz4} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={todoList} data-lightbox="gallery-todo">
                      <div className="work-img">
                        <img src={todoList} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Todo List</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack  ReactJS</span>{/*} / <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={todoList1} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={todoList2} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={todoList3} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={medlingos} data-lightbox="gallery-medlingos">
                      <div className="work-img">
                        <img src={medlingos} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Medlingos</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Bootstrap ReactJS GoogleAPI</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={medlingos1} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos2} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos3} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos4} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={amtbw} data-lightbox="gallery-amtbw">
                      <div className="work-img">
                        <img src={amtbw} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">A Mile To Be Wild</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Wordpress  Blogging-Website</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={product} data-lightbox="gallery-mf">
                      <div className="work-img">
                        <img src={product} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Product Landing Page</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap</span>{/*/ <span className="w-date">18 Sep. 2017</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        );
    }
}

export default Portfolio;