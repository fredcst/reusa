import { startStimulusApp } from '@symfony/stimulus-bridge';

import 'bootstrap';
// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(
  require.context(
    "@symfony/stimulus-bridge/lazy-controller-loader!./controllers",
    true,
    /\.[jt]sx?$/
  )
);

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

// $(document).ready(function() {
//     $('[data-toggle="popover"]').popover();
// });

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover();
// });
