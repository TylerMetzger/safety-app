import "./SafetyTips.css";
import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react"


const SafetyTips = () => {

    return (
        <div>
            <Container text>
                <Header className="tipsHeader" textAlign="center" size="huge">
                    <Header.Content>
                        Safety Tips
                        <Header.Subheader className="tipsSubheader">
                            How to stay safe while exercising your rights
                        </Header.Subheader>
                    </Header.Content>
                </Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum est sit amet nulla rutrum efficitur ut rutrum dui. Integer imperdiet augue nibh, eu euismod nibh bibendum sit amet. Nullam efficitur eleifend lacus non vehicula. Donec ac ante ac mi scelerisque vehicula. Aenean congue, felis ac lacinia accumsan, nulla arcu interdum odio, sed commodo orci diam sit amet leo. Aenean dignissim ultricies maximus. Quisque eu augue maximus lorem ultricies gravida. Integer ligula ipsum, sagittis consequat elit ac, mattis tincidunt leo. Morbi in velit a justo convallis euismod id at tellus. In at pretium nibh, eget euismod mi. Aliquam dictum efficitur dolor nec rhoncus. Aliquam eleifend, sapien vel consectetur efficitur, dolor eros pharetra lorem, non pellentesque nisi nisl eget quam. Phasellus ultricies scelerisque dui, eget dictum eros scelerisque et. Ut dictum felis vitae mollis vestibulum. Aliquam erat volutpat. Sed fermentum felis quis augue viverra dignissim.
                </p>
                <p>
                    Vestibulum consectetur posuere justo sed dignissim. Proin egestas ligula vitae massa sagittis hendrerit sit amet id purus. Donec consequat mi velit, ac euismod est pharetra at. Donec id neque lorem. Nam id purus lacus. Fusce erat lorem, scelerisque id ornare eget, accumsan sit amet lorem. Integer quis ex quis tortor interdum ultricies. Curabitur sed diam a ipsum efficitur tristique. Vestibulum ac urna ex. Phasellus mauris lacus, feugiat eget pretium ac, iaculis sed sem. Nullam vulputate augue at diam porta, eget finibus elit sollicitudin. Vivamus vitae feugiat purus. Curabitur ac malesuada sem. Suspendisse tempus convallis ante, nec varius risus vulputate quis. Sed tincidunt nibh eu magna aliquet fringilla. Nulla facilisi.
                </p>
            </Container>
        </div>
    );
};

export default SafetyTips;