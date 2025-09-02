import { useState } from 'react'
import Sidebar from '../components/Sidebar'

function Profile() {
    const [ showMenu, setShowMenu ] = useState(false)

    const toggleMenu = (body) => {
        setShowMenu(!showMenu)
    }

    return (
    <div className='flex relative '>
        {/**SIDEBAR */}
        <div className="w-[15%] relative max-small-pc:flex-[20%] max-tablet:flex-[0]">
            <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>

        {/**MAIN SECTIO */}
        <div className="flex-[85%] max-small-pc:flex-[80%] w-full min-h-screen bg-gray-50">
            
            {/**TOP */}
            <div className="topNav border-b-[1px] border-b-gray-300 flex items-center justify-between">
                <h3 className="text-gray-600 text-[21px] font-bold">Profile</h3>

                {/**MOBILE MENU BAR */}
                <div id="menu-btn" onClick={toggleMenu} className="hidden max-tablet:flex cursor-pointer">
                    <i className="fa-solid fa-bars text-[24px]"></i>
                </div>
            </div>

            {/**CONTENT */}
            <div className="contentpad">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates praesentium vero recusandae rem temporibus eaque exercitationem facere, quibusdam dolore assumenda qui nihil, corporis repellendus necessitatibus! Odio labore, inventore voluptatum fuga repellat esse quam! Animi aperiam et aut quaerat molestiae reiciendis aspernatur perspiciatis deserunt odio laboriosam repudiandae, modi quas facilis inventore velit dolore sit, cumque repellat. Facilis neque, distinctio dolores, consequatur impedit provident pariatur nemo harum soluta suscipit sequi nulla alias cumque? Aliquam delectus, sunt temporibus minima vel porro nobis necessitatibus. Quia nesciunt perspiciatis labore, vel aspernatur veniam quasi sit, ad delectus praesentium animi optio placeat. Saepe recusandae dolorum ratione asperiores maxime, laboriosam vero eligendi cum, vel pariatur labore quis, a alias sunt et ipsa ea delectus praesentium magni. Tenetur tempora architecto, consectetur dolore labore aliquid doloribus corrupti dolorum aspernatur exercitationem, veritatis debitis dolor. Esse magnam tempora animi obcaecati, aliquam voluptatibus porro dolore harum fuga blanditiis doloremque tenetur nobis fugit rerum ullam sit, labore inventore dolor sequi accusamus nulla asperiores modi numquam? Quas possimus nisi nulla est sed magnam cum nihil aliquam officiis quos quod modi, excepturi atque ab error accusantium, alias, vero illum totam! Porro praesentium omnis sunt repudiandae. Doloribus ab officiis sint distinctio, obcaecati aperiam recusandae et ut illo sapiente aliquam ipsum libero exercitationem ratione. Minus impedit nam pariatur consequuntur accusantium placeat et voluptas amet provident illo corrupti numquam magnam natus maiores quaerat debitis obcaecati eius voluptatum consequatur, corporis exercitationem est nemo quibusdam. Autem sunt praesentium minima ratione sed nostrum, nulla porro provident illo nihil? Magnam, quas. Ipsa blanditiis numquam nobis pariatur quia ex fugiat accusamus quis omnis et sequi ullam dolorum velit, iure beatae, cumque unde explicabo ut facilis, iste delectus atque? Fugit distinctio debitis repellat iste odio dolores, voluptatem impedit, asperiores libero reprehenderit sequi hic nam, quo maiores deleniti. Rerum non ab explicabo, sapiente aspernatur neque praesentium dolores quisquam quis nihil sequi repellat possimus cumque. Quasi pariatur, ipsum ad optio id voluptates repellat dolor voluptatem perferendis laboriosam sequi consectetur maiores natus, rerum at, ratione hic. Consequatur quis unde sed numquam veniam at odio nihil facilis? Vel aliquam minus dolore quaerat harum non saepe delectus, quia consequuntur impedit modi doloremque quibusdam officiis enim at qui perspiciatis laborum quod dolorem! Quia possimus, aut cupiditate corporis distinctio non ex reiciendis culpa. Molestiae sit consectetur, deserunt numquam impedit distinctio non explicabo repudiandae magnam pariatur expedita! Molestias tenetur autem expedita ad. Inventore vitae asperiores earum nisi repudiandae.
            </div>

        </div>
    </div>
  )
}

export default Profile
