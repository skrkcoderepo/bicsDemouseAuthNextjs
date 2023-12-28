import Link from 'next/link'

function not_found(){
 return (<>
<>
  <section className="wrapper">
    <div className="container">
      <div id="scene" className="scene" data-hover-only="false">
        <div className="circle" data-depth="1.2" />
        <div className="one" data-depth="0.9">
          <div className="content">
            <span className="piece" />
            <span className="piece" />
            <span className="piece" />
          </div>
        </div>
        <div className="two" data-depth="0.60">
          <div className="content">
            <span className="piece" />
            <span className="piece" />
            <span className="piece" />
          </div>
        </div>
        <div className="three" data-depth="0.40">
          <div className="content">
            <span className="piece" />
            <span className="piece" />
            <span className="piece" />
          </div>
        </div>
        <p className="p404" data-depth="0.50">
          404
        </p>
        <p className="p404" data-depth="0.10">
          404
        </p>
      </div>
      <div className="text">
        <article>
          <p>
            Uh oh! Looks like you got lost. <br />
            Thanks and Credits to <a href='https://codepen.io/rafaelavlucas/pen/NWWQNjZ' target='_blank'>codepen 404 Design</a>
          </p>
          <Link href="/"> <button>Go to Homepage</button> </Link>
        </article>
      </div>
    </div>
  </section>
</>

 </>)
}

export default not_found;
