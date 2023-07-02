import { Controller } from '@hotwired/stimulus';
import { Modal } from 'bootstrap';
import $ from 'jquery';
import { useDispatch } from 'stimulus-use'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

export default class extends Controller {
    static targets = ['modal', 'modalBody'];
    static values = {
        formUrl: String,
    }
    modal = null;
    connect() {
        useDispatch(this, {debug:true})
    }
    async openModal(event) {
        this.modalBodyTarget.innerHTML = 'Loading...';
        this.modal = new Modal(this.modalTarget);
        this.modal.show();
        this.modalBodyTarget.innerHTML = await $.ajax(this.formUrlValue);

        var group1 = document.querySelector("#group1");
        var group2 = document.querySelector("#group2");
        var group3 = document.querySelector("#group3");
        var check = document.querySelector("#check");

        var next1 = document.querySelector("#next1");
        var next2 = document.querySelector("#next2");

        var back1 = document.querySelector("#back1");
        var back2 = document.querySelector("#back2");

        next1.addEventListener('click', () => {
            group1.style.left = "-450px";
            group2.style.left = "0";
            
        });
        
        next2.addEventListener('click', () => {
            group2.style.left = "-450px";
            group3.style.left = "0";
        });

        check.addEventListener( 'change', function() {
            if(this.checked) {
                next2.disabled = false;
            } else {
                next2.disabled = true;
            }
        });

        back1.addEventListener('click', () => {
            group1.style.left = "0";
            group2.style.left = "450px";
        });
        back2.addEventListener('click', () => {
            group2.style.left = "40px";
            group3.style.left = "450px";
        });
    }
    async submitForm(event) {
        event.preventDefault();
        const $form = $(this.modalBodyTarget).find('form');
        try {
            await $.ajax({
                url: this.formUrlValue,
                method: $form.prop('method'),
                data: $form.serialize(),
            });
            this.modal.hide();
            this.dispatch('success');

        } catch (e) {
            this.modalBodyTarget.innerHTML = e.responseText;
        }
    }
    modalHidden() {
        console.log('it was hidden!');
    }
}