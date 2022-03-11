import React from 'react'

export const Card_8=(props)=> {
  return (
    <div className="col-md-8 ">
    <a href={props.apiData.url} target="_blank"  className="card my-1" style={{ maxWidth: "900px", minWidth:"15rem"}}>
      <img src={props.apiData.urlToImage} className="img-fluid card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.apiData.title}</h5>
        <p className="card-text">{props.apiData.description.substring(1,140)}</p>
        
      </div>
    </a>
  </div>

  )
}
export const Card_4=(props)=> {
    return (
        <div className="col-md-4 col-sm-12">
        <a  href={props.apiData.url} target="_blank" className="card my-1" style={{minWidth:"15rem"}} >
          <div className="row">
            <div className="col-md-12">
              <img src={props.apiData.urlToImage} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-12">
              <div className="card-body">
                <h6 className="card-title">{props.apiData.title}</h6>
                <p className="card-text fs-6">{props.apiData.description.substring(1,60)}</p>
               
              </div>
            </div>
          </div>
        </a>

        <div className="hide1">
          <div className="card my-2 " style={{minWidth:"13rem"}}>
            <div className="card-body">
              <h5 className="card-title">{}</h5>
              <p className="card-text">With supporting text below as a  content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
       
        </div>
    )
}
export const Card_2=(props)=> {
    return (
        <div className="col-md-2 col-sm-4 col-11 my-2" style={{minWidth:"13rem"}}>

        <a href={props.apiData.url} target="_blank" className="card">
          <img src={props.apiData.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{props.apiData.title}</h6>
          </div>
        </a>
      </div>
    )
}

export const Card_6=()=>{
    return(
        <div className="col-md-6 col-sm-3 col-11 my-2" style={{minWidth:"13rem"}}>
              <div className="card">
          <img src="https://www.towleroad.com/wp-content/uploads/2022/02/490960-origin_1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        </div>
    )
}
