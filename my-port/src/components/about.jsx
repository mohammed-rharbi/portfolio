
import Icon from "./ui/icon";
function About() {
    return (
      
<section id="hero">
  <div class="container">
    <div class="hero-content">
    <h1>hey there 👋</h1>
    <div class="wrapper">
  <div class="bg"><span>I am</span> Mohammed <br/> Rharbi </div>
  <div class="fg"><span>I am</span> Mohammed <br/>  Rharbi </div>
</div>
      <p>full-stack developer, passionate about crafting digital solutions.</p>

      <div className="vt">
      <button className="Btn"></button>
        <a href="/src/assets/Mohammed_Rharbi.pdf" download={'Mohammed Rharbi CV '}>
        <button className="do "></button>
        </a>
      </div>
    </div>

    <div class="hero-image">
      <img src="/public/تصميم بدون عنوان.png" alt="Mohammed Rharbi"/>
    </div>
  </div>

  <div className="icons">
  <Icon/>
  </div>

</section>

    )
}
export default About;