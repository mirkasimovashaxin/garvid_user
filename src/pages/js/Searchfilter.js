import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BiMenu } from 'react-icons/bi'
import { MdWindow } from 'react-icons/md'
import { TfiMenuAlt } from 'react-icons/tfi'
import Mon from '../img/Mon.png'
import { AiFillStar } from 'react-icons/ai'
import { HiArrowRight } from 'react-icons/hi'
import Rasp from '../img/Rasp.png'
import { BsPlus } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import "../css/loader.css"

export default function Searchfilter() {

    function Filter (){
        document.querySelector(".filter_button").classList.toggle("filter")
    }


    return (
             <div>
            <div className="Filter">
                
                <div className="blur_blok">
                    <div className="inp_blok">
                        <input type="text" placeholder='Поиск среди моих курсов' />
                        <CiSearch className='search' />
                    </div>
                    <div className="blur">
                    <div className="icon_blok">
                        <div className="sel_blok" onClick={()=>{Filter()}}>
                            <BiMenu className='menyu' />
                            <h4>Фильтр</h4>
                        </div>
                        <div className="win_men">
                            <MdWindow className='window' />
                            <TfiMenuAlt className='manu' />
                        </div>
                    </div>
                    <div className="filter_button">
                        <div className="button_filter_kurs">
                       <div className='div_kurs'>FrontEnd</div>
                       <div className='div_kurs'>Backend</div>
                       <div className='div_kurs'>Modx</div>

                       </div>
                    </div>
                </div>
                </div>
            </div>
             <div className="calibig">
                <div className='cali_df'>
                    <div className="cali">
                        <img src={Mon} alt="" />
                        <div className="zero_blok">
                            <div id="eadi" className="text_blok">
                                <h3>AWS для разработчиков: балансировка нагрузки ECS и Multi-Regional</h3>
                            </div>
                            <div className="star_icon_blok">
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar />
                                <div className="number">
                                    <h6>4.1 (524)</h6>
                                </div>
                            </div>
                            <div className="bolim_blok">
                                <div className="kurs_hajmi">
                                    <p>Размер курса</p>
                                    <h3 className='soat'>38 часы</h3>
                                </div>
                                <div className="kurs_bolimlari">
                                    <p>Разделы курса</p>
                                    <h3 className='soat'>38 часы</h3>
                                </div>
                                <div className="left_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cali">
                        <img src={Rasp} alt="" />
                        <div className="zero_blok">
                            <div className="text_blok">
                                <h3>Программирование Raspberry Pi
                                    основы</h3>
                            </div>
                            <div className="star_icon_blok">
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar />
                                <div className="number">
                                    <h6>4.1 (524)</h6>
                                </div>
                            </div>
                            <div className="bolim_blok">
                                <div className="kurs_hajmi">
                                    <p>Размер курса</p>
                                    <h3 className='soat'>38 часы</h3>
                                </div>
                                <div className="kurs_bolimlari">
                                    <p>Разделы курса</p>
                                    <h3 className='soat'>38 часы</h3>
                                </div>
                                <div className="left_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cali">
                        <img src={Rasp} alt="" />
                        <div className="zero_blok">
                            <div className="text_blok">
                                <h3>Программирование Raspberry Pi
                                    основы</h3>
                            </div>
                            <div className="star_icon_blok">
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar className='gold' />
                                <AiFillStar />
                                <div className="number">
                                    <h6>4.1 (524)</h6>
                                </div>
                            </div>
                            <div className="bolim_blok">
                                <div className="kurs_hajmi">
                                    <p>Размер курса</p>
                                    <h3 className='soat'>38 часы</h3>
                                </div>
                                <div className="kurs_bolimlari">
                                    <p>Разделы курса</p>
                                    <h3 className='soat'>38 часы</h3>
                                </div>
                                <div className="left_icon">
                                    <HiArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cali1">
                        <div className="plus_blok">
                            <BsPlus className='plus_icon' />
                            <h6>Yangi kurs qo’shish</h6>
                        </div>
                    </div>

                </div>
            </div> 


        </div>
    )
}
