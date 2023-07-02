import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    static values = {
        url : String,
    }
    static targets = ["content"];

    async refreshContent(event) {
        this.contentTarget.style.opacity = .5;
        const response = await fetch(this.urlValue);

        this.contentTarget.innerHTML = await response.text();
        this.contentTarget.style.opacity = 1;
    }
}
