import React from 'react'
import '../../styles/home.css'


export default (props) => {
  if (props.events === null)
    return <h1>Homepage loading.</h1>

  console.log(props.events.events)
  return (
    <div className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
      <div className="carousel-inner">

        {props.events.events.map(event => {
          if(event.id === 1)

            return (
              <div className="imgbox carousel-item active">
                <img className="home-background d-block w-100" src={event.picture} alt={event.imgalt} />
              </div>
            )

            return (
              <div className="imgbox carousel-item">
              <img className="home-background d-block w-100" src={event.picture} alt={event.imgalt} />
            </div>

            )
        })}


      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="false"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="false"></span>
        <span className="sr-only">Next</span>
      </a>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>

    </div>


    /* // <div className="carousel slide carousel-fade" data-ride="carousel">
    // {props.events.events.map(event => { */
    /* //   return (
    //     <div className="imgbox">
    //     <img className="home-background" src={event.picture} alt={event.imgalt} />
    //     </div>
    //   )
    // })}
    // </div> */
  )

}

