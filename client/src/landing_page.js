import React from 'react';

class LandingPage extends React.Component {
  render () {
    return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">OpenNotes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item1">
              <a class="nav-link" href="#">about <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item1">
              <a class="nav-link" href="#">faq</a>
            </li>
            <li class="nav-item1">
              <a class="nav-link" href="/login">log in</a>
              {/*need to link the Log In page*/}
            </li>
            <li class="nav-item1">
              <a class="nav-link" href="#">sign up</a>
            </li>
          </ul>
        </div>
      </nav>

<div>
    <div style={{backgroundImage: "url(./backgroundphoto.jpg)", height: "100vh"}}>
        <div class="row justify-content-md-center">
          <div class= "col-5">
            <h1> Access the best notes available online. </h1>
            <h1> By students, for students. </h1>
            <hr/>
            <p4> OpenNote is an online collection of top-tier notes across the web submitted by fellow students.
            Sign in to customize your dashboard and see when your favourite note-takers upload. </p4>
            <div class="button">
              <a href="/dashboard" class="btn btn-primary btn-lg">Browse</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)
}
}

export default LandingPage;
