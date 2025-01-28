import { useParams } from 'react-router-dom'
import Transition from '../../transition'
import './caseunico.css'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

const CaseUnico = () => {
    const { id, nome } = useParams()
    const [document] = useAllPrismicDocumentsByType('case')

    if (!document) return null

    const data = document?.find((_, index) => index === parseInt(id)) &&
    {
        title: document[id]?.data.title[0].text,
        description: document[id]?.data.description[0].text,
        hero_image: document[id]?.data.hero_image.url,
        background: document[id]?.data.background[0].text,
        group_images_one: {
            g1_image_1: document[id]?.data.group_images_one[0].g1_image_1.url,
            g1_image_2: document[id]?.data.group_images_one[0].g1_image_2.url,
            g1_image_3: document[id]?.data.group_images_one[0].g1_image_3.url,
        },
        branding_group: {
            brand_naming: document[id]?.data.branding_group[0].brand_naming[0].text,
            brand_positioning: document[id]?.data.branding_group[0].brand_positioning[0].text
        },
        group_images_two: {
            g2_image_1: document[id]?.data.group_images_two[0].g2_image_1.url,
            g2_image_2: document[id]?.data.group_images_two[0].g2_image_2.url,
            g2_image_3: document[id]?.data.group_images_two[0].g2_image_3.url,


        },
        visual_expression: document[id]?.data.visual_expression[0].text,
        group_images_three: {
            g3_image_1: document[id]?.data.group_images_three[0].g3_image_1.url,
            g3_image_2: document[id]?.data.group_images_three[0].g3_image_2.url,
            g3_image_3: document[id]?.data.group_images_three[0].g3_image_3.url,

        },
        categories: document[id]?.data.categories,
        // categories:{
        //     item1: document[id]?.data.categories[0].text,
        //     item2: document[id]?.data.categories[1].text,
        //     item3: document[id]?.data.categories[2].text
        // },
        about_the_project: document[id]?.data.about_the_project[0].text



    };



    return (
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
                    <h2>[ Background ] </h2>
                    <div className='back-text'>
                        <p>{data.background}</p>
                    </div>

                </div>

                <div className='group-grid'>
                    <img className='item1' src={data.group_images_one.g1_image_1} alt='' />
                    <img className='item2' src={data.group_images_one.g1_image_2} alt='' />
                    <img className='item3' src={data.group_images_one.g1_image_3} alt='' />

                </div>
            </section>

        </div>
    )
}
export default Transition(CaseUnico)