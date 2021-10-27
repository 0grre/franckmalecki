<template>
  <section class="signup-section" id="signup">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
          <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 class="text-white mb-5">Tu veux plus d'info ?</h2>
          <div class="alert alert-danger">
          </div>
          <div class="alert alert-success">
            "Votre email a bien été envoyé."
          </div>
          <form class="form-group d-flex flex-column"  method="post">
            <div class="d-flex flex-rown">
              <input class="form-control flex-fill mr-2 mb-3" name="contact_email" type="email"
                     placeholder="Email ..."
                     value=""/>
              <select class="form-control flex-fill ml-2 mb-3 text-primary" name="contact_goal">
                <option class="text-primary">Objectif ...</option>
                <option class="text-primary">Perte de poids</option>
                <option class="text-primary">Prise de masse musculaire</option>
                <option class="text-primary">Regain d'énergie</option>
                <option class="text-primary">Amélioration des performances sportives</option>
                <option class="text-primary">Bien être</option>
              </select>
            </div>
            <textarea class="form-control flex-fill mr-0 mr-sm-2 mb-3" name="contact_message" type="text"
                      placeholder="Message ..."></textarea>
            <button class="btn btn-primary mx-auto mt-2" name="envoye" type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
