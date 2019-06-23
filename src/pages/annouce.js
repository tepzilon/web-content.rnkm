import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import Layout from '../components/layout'

export default () => {
  let responsive = {
    desktop: useMediaQuery('(min-width:991px)'),
    tablet: useMediaQuery('(min-width:767px)'),
    mobile: useMediaQuery('(min-width:479px)'),
  }

  return (
    <Layout responsive={responsive} title="ประกาศ" theme="blue">
      <h1>Annoucement</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio quidem libero aspernatur, deserunt sapiente. Laboriosam nihil quasi, iure qui maxime repellendus omnis illum vero architecto dignissimos. Voluptatibus eveniet officia earum molestiae saepe ut cupiditate cumque. Optio animi eum nobis sed saepe laudantium rerum, non cumque magni tempore nisi quis quae obcaecati voluptas voluptate id possimus dolores fuga vitae assumenda nemo! Voluptatum eveniet at alias officia dolorum sequi, nam ut repellat possimus? Provident reprehenderit pariatur quod eligendi totam esse, aspernatur ipsam quo voluptatum, laboriosam velit deserunt assumenda itaque voluptatibus quaerat earum fugit ad perferendis quasi rerum! Numquam provident maiores ea nobis tempora ex iure, quia, harum sunt magni quo odit modi nisi repudiandae illo quam qui. Laborum nam ut velit perspiciatis est corrupti qui dicta quidem molestiae temporibus ab omnis nobis accusamus reprehenderit modi, ratione, natus minima libero facilis voluptas alias, quod adipisci totam quae. Aspernatur, aperiam asperiores dicta neque tempore at omnis hic facilis alias sit ducimus totam odio quo repudiandae atque! Quae repudiandae dolor tempora, veniam totam quia provident, laudantium rem architecto quam accusamus consequatur nisi numquam id voluptatem nobis eveniet consectetur repellendus tenetur sed minima ab eaque iste. Sapiente, quia dolorem. Corrupti voluptatibus debitis doloremque alias, ullam recusandae, earum nihil sint nostrum vero nam ex dicta reprehenderit, repellat iste! Magni minus nulla aperiam repudiandae nam rerum est perferendis sed amet, excepturi laborum vero reprehenderit quaerat hic praesentium, similique corrupti molestiae. Id repudiandae illum earum pariatur molestias, rem exercitationem accusantium ad quaerat ut, at sunt voluptates aut omnis non. Eveniet beatae animi consequatur rem sit excepturi sequi enim earum tenetur sint provident vitae fugit ad culpa natus architecto perspiciatis, illum debitis. Unde aliquam voluptates veritatis cupiditate, deleniti mollitia sunt sequi, placeat velit vitae, est excepturi delectus reprehenderit maxime quod sint eligendi modi eius? Dolore error quis, sunt autem, voluptatum sed animi, dolor illo optio molestias vitae beatae provident officia magni incidunt atque. Nesciunt eius consequatur officiis, maiores cum voluptate magni animi quod sapiente error accusantium blanditiis labore fugit quo sequi perspiciatis minima possimus voluptas maxime quasi optio? Tempora aut doloremque cum dolores atque, possimus sequi harum magni neque quisquam laborum esse sit eos quia, architecto tempore. Tempore magni illum aliquam commodi porro cupiditate exercitationem similique ullam mollitia iure, provident quisquam. Repudiandae blanditiis aliquam similique quod. Minima inventore tempora cum reprehenderit doloremque debitis. Vitae iste temporibus explicabo minus ipsum cumque quas corrupti, ipsam placeat consequatur dicta ex fuga, amet fugit distinctio ad porro earum possimus nobis. Maiores natus voluptates culpa, architecto laudantium temporibus numquam, omnis odit explicabo quod quo incidunt cumque iusto quaerat. Alias cum amet voluptatem voluptatibus inventore doloribus iste deserunt dolor harum. Unde, sunt. Earum voluptatibus nemo aliquid odit reprehenderit adipisci sunt ratione doloremque nesciunt qui totam, minima quibusdam! Officia labore corporis dolorum similique quos eaque, id iusto, numquam et voluptatibus architecto pariatur nostrum ab molestias illo doloremque recusandae totam dolores? Eius facere fugit quaerat iusto autem tempora quas sequi optio illo eligendi in ab est laborum, eum possimus omnis molestiae nulla quidem deserunt explicabo, quae eveniet?</p>
    </Layout>
  )
}
