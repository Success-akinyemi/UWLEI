import { useState } from "react"
import Countries from "../components/Countries"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { startDonation } from "../helpers/api"
import { notify } from "../utils/taost"
import { teamMember } from "../data/team"

function Team() {
    const teamData = teamMember


  return (
    <div className="">
        <Nav />

        <div className="py-12 bg-gray-100 flex flex-col items-center justify-center flex-wrap overflow-hidden">
            <div className="" data-aos='fade-up' >
                <h3 className='texth2 mb-0'>Meet Our Team</h3>
                <p className='text-[15px] '>meet the faces behind the mission</p>
            </div>

            <div className="flex items-center justify-center gap-8 flex-wrap mt-16">
                {
                    teamData.map((i, idx) => (
                        <div key={idx} data-aos='fade-up' className="flex flex-col items-center justify-center gap-3">
                            <img alt={`${i.name}`} src={i.image} className="h-[180px] w-[180px] rounded-full" />
                            <div className="flex flex-col">
                                <h3 className="text-[17px] font-bold text-gray-800">{i.name}</h3>
                                <p className="font-normal">{i.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
      
        {/**COUNTRIES */}
        <Countries />

        {/**CTA */}
        <Cta />

        {/**FOOTER */}
        <Footer />
    </div>
  )
}

export default Team
