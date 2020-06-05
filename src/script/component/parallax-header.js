import "./navbar.js";
import "./search-box.js";
import burrito from "../../img/burritoChicken.jpg";

class ParallaxHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
        this.init();
    }
    
    render() {
        this.innerHTML = `
        <div class="parallax-container">
            <div class="parallax"><img src="${burrito}"></div>
            <div class="container">
                <div class="row">
                    <my-navbar></my-navbar>
                </div>
                <search-box></search-box>
            </div>  
        </div>
        `
    }
    init() {
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.parallax');
            M.Parallax.init(elems);
        });
    }
}

customElements.define("parallax-header", ParallaxHeader);