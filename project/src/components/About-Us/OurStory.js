import React from 'react';
import OurStoryContent from './OurStoryContent';
import OurStoryHeader from './OurStoryHeader';

const content="Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımlar";

const OurStory=()=>{
        return (
            <section className="about_us__item-about-best-buy" >
                <OurStoryHeader />
                <div className="about-us__item-about-best-buy-pages" >
                    <OurStoryContent content={content}/>
                    <OurStoryContent content={content}/>
                    <OurStoryContent content={content}/>
                    
                </div>
            </section>
        )
    }




export default OurStory;
