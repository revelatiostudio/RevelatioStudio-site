import { Link, useParams } from 'react-router-dom'
import Transition from '../../transition'
import './caseunico.css'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

import revelatioLogo from '../../assets/img/cases/logo-revelatio-case.svg'

import img1 from '../../assets/img/cases/approach.png'
import img2 from '../../assets/img/cases/immersy.png'
import img3 from '../../assets/img/cases/kaicara.png'
import img4 from '../../assets/img/cases/life.png'
import img5 from '../../assets/img/cases/dca.png'





import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid, FreeMode, Pagination } from 'swiper/modules'
import BottomHome from '../Home/componentesHome/BottomHome'

const CaseUnico = () => {
    const { id, nome } = useParams()
    const [document] = useAllPrismicDocumentsByType('case')

    if (!document) return null

    const data = document?.find((_, index) => index === parseInt(id)) &&
    {
        title: document[id]?.data.title[0]?.text || "",
        description: document[id]?.data.description[0]?.text || "",
        hero_image: document[id]?.data.hero_image?.url || "",
        background: document[id]?.data.background[0]?.text || "",
        group_images_one: {
            g1_image_1: document[id]?.data.group_images_one[0].g1_image_1?.url || "",
            g1_image_2: document[id]?.data.group_images_one[0].g1_image_2?.url || "",
            g1_image_3: document[id]?.data.group_images_one[0].g1_image_3?.url || "",
        },
        branding_group: {
            brand_naming: document[id]?.data.branding_group[0].brand_naming[0]?.text || "",
            brand_positioning: document[id]?.data.branding_group[0].brand_positioning[0]?.text || ""
        },
        group_images_two: {
            g2_image_1: document[id]?.data.group_images_two[0]?.g2_image_1.url || "",
            g2_image_2: document[id]?.data.group_images_two[0]?.g2_image_2.url || "",
            g2_image_3: document[id]?.data.group_images_two[0]?.g2_image_3.url || "",


        },
        visual_expression: document[id]?.data.visual_expression[0]?.text || "",
        group_images_three: {
            g3_image_1: document[id]?.data.group_images_three[0]?.g3_image_1.url || "",
            g3_image_2: document[id]?.data.group_images_three[0]?.g3_image_2.url || "",
            g3_image_3: document[id]?.data.group_images_three[0]?.g3_image_3.url || "",

        },
        categories: document[id]?.data?.categories || "",
        about_the_project: document[id]?.data.about_the_project[0]?.text || ""



    };

    const caseGaleria = document?.map((data, id) => {
        return {
            id,
            img: data.data.case_gallery[0]?.case_cover.url,
            projeto: data.data.case_gallery[0]?.project[0]?.text,
            tipo: data.data.case_gallery[0]?.type,
            tag: data.data.case_gallery[0]?.tag
        }

    }).slice(0, 6)


    return (
        <>
        <div className='grid-global'>
            <section className='container-caseunico'>
                <div className='title'>
                    <h1>{data.title}</h1>
                    <div className='services'>
                        {data.categories.map((a, index) => (
                            <p>{a.text}{index === data.categories.length - 1 ? '.' : ','}</p>
                        ))}
                    </div>
                </div>
                <div className='resume'>
                    <div className='text-resume'>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className='image-hero'>
                    <img src={data.hero_image} alt='imagem do case' />
                </div>
                <div className='background'>
                    <h3>[ Background ] </h3>
                    <div className='back-text'>
                        <p>{data.background}</p>
                    </div>

                </div>

                <div className='group-grid'>
                    <img className='item1' src={data.group_images_one.g1_image_1} alt='' />
                    <img className='item2' src={data.group_images_one.g1_image_2} alt='' />
                    <img className='item3' src={data.group_images_one.g1_image_3} alt='' />

                </div>
                <div className='brand'>
                    <div className='brand-naming'>
                        <h3>[ Brand Naming ]</h3>
                        <p>{data.branding_group.brand_naming}</p>
                    </div>
                    <div className='brand-posi'>
                        <h3>[ Brand Positioning ]</h3>
                        <p>{data.branding_group.brand_positioning}</p>
                    </div>

                </div>
                <div className='grupo-image-2'>
                    <img src={data.group_images_two.g2_image_1} alt='' />
                    <img src={data.group_images_two.g2_image_2} alt='' />
                    <img src={data.group_images_two.g2_image_3} alt='' />
                </div>
                <div className='visual'>
                    <h3>[ Visual Expression ]</h3>
                    <p>{data.visual_expression}</p>
                    <div className='group-images-3'>
                        <img src={data.group_images_three.g3_image_1} alt='' />
                        <img src={data.group_images_three.g3_image_2} alt='' />
                        <img src={data.group_images_three.g3_image_3} alt='' />
                    </div>

                </div>
                <div className='category-about'>
                    <div className='cat-abou'>
                        <div className='category-bottom'>
                            <h3>[ Categorias ]</h3>
                            <ul>
                                {data.categories.map((a) => (
                                    <li>{a.text}</li>
                                ))}
                            </ul>

                        </div>
                        <div className='about-bottom'>
                            <h3>[ Sobre o projeto ]</h3>
                            <p>{data.about_the_project}</p>

                        </div>
                    </div>
                </div>

                <div className='more-projects'>
                    <div className='projects-cases'>
                        <h2>Projetos relacionados</h2>
                        <img src={revelatioLogo} alt='' />
                    </div>
                    <div className='all-projects'>
                        <Swiper
                            slidesPerView={1.2}
                            spaceBetween={10}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            autoHeight={false}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.2
                                },
                                600: {
                                    slidesPerView: 2

                                },
                                800: {
                                    slidesPerView: 2

                                },
                                900: {
                                    slidesPerView: 3

                                },
                                1200: {
                                    spaceBetween: 10,
                                    slidesPerView: 4
                                }

                            }}

                        >

                            {

                                caseGaleria.map((cases) => (
                                    
                                        <SwiperSlide key={cases.id}>
                                            <Link to={`/cases/caseunico/${cases.projeto}/${cases.id}`}>
                                            <img src={cases.img} alt='' />
                                            </Link>
                                        </SwiperSlide>
                                    
                                ))

                            }

                        </Swiper>

                    </div>
                </div>
               
            </section>
                
        </div>
         <BottomHome />
        </>
        
    )
}
export default Transition(CaseUnico)