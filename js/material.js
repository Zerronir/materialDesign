import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCTab} from '@material/tab';
import {MDCTabBar} from '@material/tab-bar';
import {MDCRipple} from '@material/ripple';


// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const tab = new MDCTab(document.querySelector('.mdc-tab'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    return new MDCRipple(el);
});
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));