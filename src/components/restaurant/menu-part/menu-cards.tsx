import React from 'react'
import MenuCard from './menus/menu-card'
import {Items} from "@prisma/client";

const MenuCards = ({menu}:{menu:Items[]}) => {
    console.log(menu)

    return (
    <main className="bg-white mt-5">
          <div>
            <div className="mt-4 pb-1 mb-1">
              <h1 className="font-bold text-4xl">Menu</h1>
            </div>
              {menu.length ? ( <div className="flex flex-wrap justify-between">
                  {menu.map(item=>(
                      <MenuCard key={item.id} item={item}/>
                  ))}
              </div> ) : (<div className="flex flex-wrap justify-between"><p>This restaurant doesn't have an menu</p></div>)}
          </div>
        </main>
  )
}

export default MenuCards