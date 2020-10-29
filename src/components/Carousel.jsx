import React, { Component } from 'react'
import '../styles/custom.css'

class Carousel extends Component{

    constructor(props){
        super(props)
        this.state = {
            cover: this.props.arr_images[this.props.element_chosen],
            showcase: [],
            middle_element: this.props.element_chosen,
            just_open: false
        }
    }

    //Update carousel to view the chosen element
    viewThisElement = (key) => {
        const cleanIndex = this.convert_index(key)

        this.setState({ 
            cover: this.props.arr_images[cleanIndex],
            middle_element: cleanIndex,
            showcase: this.build_showcase(cleanIndex)
        })
    }

    //Find the proper index if value out of range
    convert_index = (index) => {
        if(index >= 0 && index < this.props.arr_images.length){
            return index
        }else if(index >= this.props.arr_images.length){
            return index - this.props.arr_images.length
        }else if(index < 0){
            return this.props.arr_images.length - -index 
        }
    }

    //Build the mini-icons showcase
    build_showcase = (middle_index) => {
        let indexes = []
        let start = 0;
        let end = 0;

        //There are 5 o more elements to show 5
        if(this.props.arr_images.length >= 5){
            start = middle_index - 2
            end = start + 5

        //There are 3 or 4 elements to show 3
        }else if(this.props.arr_images.length >= 3){
            start = middle_index - 1
            end = start + 3

        //There are 1 or 2 elements to show them all
        }else{
            start = 0
            end = this.props.arr_images.length
        }

        //Main loop to push actual indexes
        for(let i = start; i < end; i++)
            indexes.push(this.convert_index(i))

        return indexes
    }

    componentDidUpdate(prevProps, PrevState){
        
        //This is when the modal gets open
        if(this.props.is_open && this.state.just_open === false){
            this.viewThisElement(this.props.element_chosen)
            this.setState({ just_open: true })
        }

        //This is when the modal gets close
        if(!this.props.is_open && this.state.just_open === true){
            this.setState({ just_open: false })
        }

    }

    render(){
        return(
            <div className="ModalBox" style={{display: (!this.props.is_open && 'none')}}>
                <div className="CarouselBox">
                    <img src={this.state.cover} className="ModalContent" alt="Carousel Main"/>
                    <div className="CarouselClose" onClick={() => this.props.close_modal()}>
                        &#10005;
                    </div>
                    <div className="CarouselLegend">
                        {(this.state.middle_element + 1) + " / " + this.props.arr_images.length}
                    </div>  
                </div>

                <div className="CarouselNav">
                    <div onClick={() => this.viewThisElement(this.state.middle_element - 1)} className="ArrowDirection">
                        Prev
                    </div>

                    {this.state.showcase.map((item, key) =>
                        <div onClick={() => this.viewThisElement(item)} key={item} className="ElementNav">
                            <img 
                                src={this.props.arr_images[item]}
                                alt={this.props.project_name + " - Image " + (item + 1)} 
                                className={"LittleImage " + (item === this.state.middle_element && "ElementActive") }
                            />
                        </div>
                    )}

                    <div onClick={() => this.viewThisElement(this.state.middle_element + 1)} className="ArrowDirection">
                        Next
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel
