import Container from "../components/container";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Button from "../components/button";
import { useEffect } from 'react';

const myHTML = `<style type="text/css">
@import url("https://assets.mlcdn.com/fonts.css?version=1664978");
</style>
<style type="text/css">
/* LOADER */
.ml-form-embedSubmitLoad {
  display: inline-block;
  width: 20px;
  height: 2px;
}

.g-recaptcha {
  transform: scale(1);
  -webkit-transform: scale(1);
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.ml-form-embedSubmitLoad:after {
  content: " ";
  display: block;
  width: 11px;
  height: 11px;
  margin: 1px;
  border-radius: 50%;
  border: 4px solid #fff;
  border-color: #ffffff #ffffff #ffffff transparent;
  animation: ml-form-embedSubmitLoad 1.2s linear infinite;
}

@keyframes ml-form-embedSubmitLoad {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

#mlb2-1293871.ml-form-embedContainer {
  box-sizing: border-box;
  display: table;
  margin: 0 auto;
  position: static;
  width: 100% !important;
}

#mlb2-1293871.ml-form-embedContainer h4,
#mlb2-1293871.ml-form-embedContainer p,
#mlb2-1293871.ml-form-embedContainer span,
#mlb2-1293871.ml-form-embedContainer button {
  text-transform: none !important;
  letter-spacing: normal !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper {
  background-color: #0B0E12;
  border-width: 0px;
  border-color: transparent;
  border-radius: 4px;
  border-style: solid;
  box-sizing: border-box;
  display: inline-block !important;
  margin: 0;
  padding: 0;
  position: relative;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper.embedDefault {
  width: 530px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
  max-width: 900px;
  width: 1020px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper.embedForm {
  max-width: 900px;
  width: 600px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-align-left {
  text-align: left;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-align-center {
  text-align: center;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-align-default {
  display: table-cell !important;
  vertical-align: middle !important;
  text-align: center !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-align-right {
  text-align: right;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: auto;
  margin: 0 auto !important;
  max-width: 100%;
  width: undefinedpx;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
  padding: 20px 20px 0 20px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
  padding-bottom: 0;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
  text-align: left;
  margin: 0 0 20px 0;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4 {
  color: #2B6DF3;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 10px 0;
  text-align: center;
  word-break: break-word;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p {
  color: #2B6DF3;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 10px 0;
  text-align: center;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol {
  color: #000000;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 14px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol {
  list-style-type: lower-alpha;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol {
  list-style-type: lower-roman;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a {
  color: #000000;
  text-decoration: underline;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group {
  text-align: left !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label {
  margin-bottom: 5px;
  color: #333333;
  font-size: 14px;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  display: inline-block;
  line-height: 20px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child {
  margin: 0;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form {
  margin: 0;
  width: 100%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
  margin: 0 0 20px 0;
  width: 100%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow {
  float: left;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
  margin: 0;
  padding: 0 0 20px 0;
  width: 100%;
  height: auto;
  float: left;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow {
  margin: 0 0 10px 0;
  width: 100%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item {
  margin: 0;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal {
  margin: 0;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
  background-color: #0B0E12 !important;
  color: #AABDC6 !important;
  border-color: #AABDC6;
  border-radius: 25px !important;
  border-style: solid !important;
  border-width: 2px !important;
  font-family: 'Inter', sans-serif;
  font-size: 14px !important;
  height: auto;
  line-height: 21px !important;
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 10px 10px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder {
  color: #AABDC6;
  text-align: center;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder {
  color: #AABDC6;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder {
  color: #AABDC6;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder {
  color: #AABDC6;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea {
  background-color: #0B0E12 !important;
  color: #AABDC6 !important;
  border-color: #AABDC6;
  border-radius: 25px !important;
  border-style: solid !important;
  border-width: 2px !important;
  font-family: 'Inter', sans-serif;
  font-size: 14px !important;
  height: auto;
  line-height: 21px !important;
  margin-bottom: 0;
  margin-top: 0;
  padding: 10px 10px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
  border-color: #AABDC6 !important;
  background-color: #0B0E12 !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin-top: 5px;
  margin-left: -1.5rem;
  overflow: visible;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
  border-radius: 4px !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before {
  border-color: #2B6DF3 !important;
  background-color: #2B6DF3 !important;
  color: #ffffff !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after {
  top: 2px;
  box-sizing: border-box;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
  top: 0px !important;
  box-sizing: border-box !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
  top: 0px !important;
  box-sizing: border-box !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after {
  top: 0px !important;
  box-sizing: border-box !important;
  position: absolute;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before {
  top: 0px !important;
  box-sizing: border-box !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before {
  position: absolute;
  top: 4px;
  left: -1.5rem;
  display: block;
  width: 16px;
  height: 16px;
  pointer-events: none;
  content: "";
  background-color: #ffffff;
  border: #adb5bd solid 1px;
  border-radius: 50%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after {
  position: absolute;
  top: 2px !important;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
  position: absolute;
  top: 4px;
  left: -1.5rem;
  display: block;
  width: 16px;
  height: 16px;
  pointer-events: none;
  content: "";
  background-color: #ffffff;
  border: #adb5bd solid 1px;
  border-radius: 50%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after {
  position: absolute;
  top: 0px !important;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
  position: absolute;
  top: 0px !important;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after {
  background: no-repeat 50%/50% 50%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after {
  background: no-repeat 50%/50% 50%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
  box-sizing: border-box;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label {
  color: #00000;
  font-size: 12px !important;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  line-height: 22px;
  margin-bottom: 0;
  position: relative;
  vertical-align: top;
  font-style: normal;
  font-weight: 700;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select {
  background-color: #0B0E12 !important;
  color: #AABDC6 !important;
  border-color: #AABDC6;
  border-radius: 25px !important;
  border-style: solid !important;
  border-width: 2px !important;
  font-family: 'Inter', sans-serif;
  font-size: 14px !important;
  line-height: 20px !important;
  margin-bottom: 0;
  margin-top: 0;
  padding: 10px 28px 10px 12px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  max-width: 100% !important;
  height: auto;
  display: inline-block;
  vertical-align: middle;
  background: url('https://cdn.mailerlite.com/images/default/dropdown.svg') no-repeat right .75rem center/8px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
  height: auto;
  width: 100%;
  float: left;
}

.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal {
  width: 70%;
  float: left;
}

.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal {
  width: 30%;
  float: left;
}

.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn {
  padding-top: 25px;
}

.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
  box-sizing: border-box;
  float: left;
  padding-right: 0px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input {
  background-color: #0B0E12;
  color: #AABDC6;
  border-color: #AABDC6;
  border-radius: 25px;
  border-style: solid;
  border-width: 2px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 0;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  overflow-y: initial;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button {
  background-color: #2B6DF3 !important;
  border-color: #2B6DF3;
  border-style: solid;
  border-width: 2px;
  border-radius: 0px;
  box-shadow: none;
  color: #ffffff !important;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 20px;
  margin: 0 !important;
  padding: 10px !important;
  width: 100%;
  height: auto;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover {
  background-color: #E8DB31 !important;
  border-color: #E8DB31 !important;
  color: #000000 !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin-top: 5px;
  margin-left: -1.5rem;
  overflow: visible;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description {
  color: #000000;
  display: block;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-align: left;
  margin-bottom: 0;
  position: relative;
  vertical-align: top;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label {
  font-weight: normal;
  margin: 0;
  padding: 0;
  position: relative;
  display: block;
  min-height: 24px;
  padding-left: 24px;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a {
  color: #000000;
  text-decoration: underline;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p {
  color: #000000 !important;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
  font-size: 12px !important;
  font-weight: normal !important;
  line-height: 18px !important;
  padding: 0 !important;
  margin: 0 5px 0 0 !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child {
  margin: 0;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit {
  margin: 0 0 20px 0;
  float: left;
  width: 100%;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button {
  background-color: #2B6DF3 !important;
  border: none !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  color: #ffffff !important;
  cursor: pointer;
  font-family: 'Inter', sans-serif !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 21px !important;
  height: auto;
  padding: 10px !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading {
  display: none;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover {
  background-color: #333333 !important;
}

.ml-subscribe-close {
  width: 30px;
  height: 30px;
  background: url('https://cdn.mailerlite.com/images/default/modal_close.png') no-repeat;
  background-size: 30px;
  cursor: pointer;
  margin-top: -10px;
  margin-right: -10px;
  position: absolute;
  top: 0;
  right: 0;
}

.ml-error input,
.ml-error textarea,
.ml-error select {
  border-color: red !important;
}

.ml-error .custom-checkbox-radio-list {
  border: 1px solid red !important;
  border-radius: 4px;
  padding: 10px;
}

.ml-error .label-description,
.ml-error .label-description p,
.ml-error .label-description p a,
.ml-error label:first-child {
  color: #ff0000 !important;
}

#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,
#mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter {
  color: #ff0000 !important;
}

@media only screen and (max-width: 530px) {

  .ml-form-embedWrapper.embedDefault,
  .ml-form-embedWrapper.embedPopup {
    width: 100% !important;
  }

  .ml-form-formContent.horozintalForm {
    float: left !important;
  }

  .ml-form-formContent.horozintalForm .ml-form-horizontalRow {
    height: auto !important;
    width: 100% !important;
    float: left !important;
  }

  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal {
    width: 100% !important;
  }

  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div {
    padding-right: 0px !important;
    padding-bottom: 10px;
  }

  .ml-form-formContent.horozintalForm .ml-button-horizontal {
    width: 100% !important;
  }

  .ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn {
    padding-top: 0px !important;
  }
}
</style>

<style type="text/css">
.ml-mobileButton-horizontal {
  display: none;
}

#mlb2-1293871 .ml-mobileButton-horizontal button {
  background-color: #2B6DF3 !important;
  border-color: #2B6DF3 !important;
  border-style: solid !important;
  border-width: 2px !important;
  border-radius: 0px !important;
  box-shadow: none !important;
  color: #ffffff !important;
  cursor: pointer;
  font-family: 'Inter', sans-serif !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 20px !important;
  padding: 10px !important;
  width: 100% !important;
}

@media only screen and (max-width: 530px) {
  #mlb2-1293871.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
    padding: 0 0 10px 0 !important;
  }

  .ml-hide-horizontal {
    display: none !important;
  }

  .ml-form-formContent.horozintalForm .ml-button-horizontal {
    display: none !important;
  }

  .ml-mobileButton-horizontal {
    display: inline-block !important;
    margin-bottom: 20px;
    width: 100%;
  }

  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div {
    padding-bottom: 0px !important;
  }
}
</style>
<style type="text/css">
@media only screen and (max-width: 530px) {
  .ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
    margin-bottom: 10px !important;
    width: 100% !important;
  }
}
</style>

<div id="mlb2-1293871" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1293871">
<div class="ml-form-align-center ">
  <div class="ml-form-embedWrapper embedForm">

    <div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">

      <div class="ml-form-embedContent" style="margin-bottom: 0px; ">

      </div>

      <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/138328/forms/64967520383141314/subscribe" data-code="" method="post" target="_blank">

        <div class="ml-form-formContent horozintalForm">
          <div class="ml-form-horizontalRow">
            <div class="ml-input-horizontal">

              <div style="width: 100%;" class="horizontal-fields">

                <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">

                  <!-- input -->
                  <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email">
                  <!-- /input -->
                </div>

              </div>

            </div>

            <div class="ml-button-horizontal primary">

              <button type="submit" class="primary">Stay in touch</button>

              <button disabled="disabled" style="display: none;" type="button" class="loading">
                <div class="ml-form-embedSubmitLoad"></div>
                <span class="sr-only">Loading...</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Privacy policy -->

        <!-- /Privacy policy -->

        <input type="hidden" name="ml-submit" value="1">

        <div class="ml-mobileButton-horizontal ">
          <button type="submit" class="primary">Stay in touch</button>
          <button disabled="disabled" style="display: none;" type="button" class="loading">
            <div class="ml-form-embedSubmitLoad"></div>
            <span class="sr-only">Loading...</span>
          </button>
        </div>
        <input type="hidden" name="anticsrf" value="true">
      </form>
    </div>

    <div class="ml-form-successBody row-success" style="display: none">

      <div class="ml-form-successContent">

        <h4>Thank you!</h4>

        <p>You have successfully joined our subscriber list.</p>

      </div>

    </div>
  </div>
</div>
</div>

<script>
function ml_webform_success_1293871() {
  var $ = ml_jQuery || jQuery;
  $('.ml-subscribe-form-1293871 .row-success').show();
  $('.ml-subscribe-form-1293871 .row-form').hide();
}
</script>

<script src="https://groot.mailerlite.com/js/w/webforms.min.js?v491724307ca3b85c1c754857e93994e5" type="text/javascript"></script>`;

export default function Home() {
  useEffect(() => {
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '138328');
  }, []);

  return (
    <Container>
      {/* Hero */}
      <div className="flex flex-col items-center space-y-8">
        <div className="w-full">
          <img
            className="hidden md:block w-full border-t md:border-t-0 border-b pb-5 pt-5 md:pt-0"
            src="/logo_thin.svg"
          />
          <img
            className="block md:hidden w-full border-t md:border-t-0 border-b pb-5 pt-5 md:pt-0"
            src="/logo.svg"
          />
        </div>
        <h2 className="font-bold text-blue font-body text-[40px] md:text-8xl tracking-tighter leading-[0.85] text-center">
          The marketplace
          <br />
          for trustless storage
        </h2>
        <p className="max-w-[39ch] text-center">
          Banyan aggregates storage providers and introduces simple
          cryptoeconomic incentives to make data worth storing in the web3 era.
        </p>
        <div className="py-4 w-full border-y font-head flex space-x-4 items-center">
          <p className="shrink-0 font-head uppercase">Supported by</p>
          <Marquee speed={43} gradientColor={[11, 14, 18]}>
            <div className="flex space-x-16 items-center">
              <img
                className="pl-16 h-[44px]"
                src="/protocol-labs-logo-white.svg"
              />
              <span className="block shrink-0">Zee Prime Capital</span>
              <span>ySprout</span>
              <img className="h-[38px]" src="/chainlink.svg" />
              <img className="h-3" src="/hypersphere.svg" />
              <img className="h-[44px]" src="/polychain.svg" />
              <img className="h-[44px]" src="/protocol-labs-logo-white.svg" />
              <span className="block shrink-0">Zee Prime Capital</span>
              <span>ySprout</span>
              <img className="h-[38px]" src="/chainlink.svg" />
              <img className="h-3" src="/hypersphere.svg" />
              <img className="h-[44px]" src="/polychain.svg" />
            </div>
          </Marquee>
        </div>
      </div>
      {/* Why Banyan */}
      <div className="my-40 md:my-60" id="why">
        <h2 className="text-center text-blue text-4xl md:text-7xl font-bold font-head uppercase tracking-tighter mb-12">
          Why Banyan
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4 pb-16">
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">Security</h3>
            <p className="h-[50%]">
              The safety of decentralized storage with exceptional
              censorship-resistant privacy features.
            </p>
          </div>
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">Longevity</h3>
            <p className="h-[50%]">
              We incentivize IPFS paid on chain to ensure your data will be
              stored safely as long as you want.
            </p>
          </div>
          <div className="p-4 basis-1/3 border flex flex-col space-y-16 justify-between">
            <h3 className="font-sans text-3xl font-bold">User-friendliness</h3>
            <p className="h-[50%]">
              Effortless advanced file management features with our web
              interface and API.
            </p>
          </div>
        </div>
      </div>
      {/* Goal */}
      <img className="my-40 md:my-60 block md:hidden" src="/goal_mobile.png" />
      <img className="my-40 md:my-60 hidden md:block" src="/goal.png" />
      {/* How it works */}
      <div className="flex flex-col my-40 md:my-60 space-y-12" id="how">
        <h2 className="text-center text-blue text-4xl md:text-7xl font-bold font-head uppercase tracking-tighter">
          How it works
        </h2>
        <img src="/diagram_mobile.svg" className="block md:hidden" />
        <img src="/diagram.svg" className="hidden md:block" />
      </div>
      {/* Team */}
      <div className="flex flex-col my-40 md:my-60 w-full" id="team">
        <h2 className="text-center text-blue text-4xl md:text-7xl font-bold font-head uppercase tracking-tighter mb-12">
          Our Team
        </h2>
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:space-x-[3px] mb-[1px] md:mb-[3px]">
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] shadow-gray rounded-xl md:rounded-t-none md:rounded-tl-none p-4 flex justify-start flex-col space-y-16 mb-[1px] md:mb-0">
            <div>
              <h3 className="font-sans text-3xl font-bold">Claudia Richoux</h3>
              <p className="font-sans font-bold text-blue">CEO/CTO</p>
            </div>
            <p>
              Claudia worked full-time at Protocol Labs as a Filecoin runtime
              engineer and Trail of Bits as a cryptography auditor and
              researcher, interned at Dropbox and Jane Street, contributed to
              several Defi and crypto projects as a freelancer during and after
              Defi summer. She studied Computer Science at The University of
              Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl md:rounded-t-none md:rounded-tr-none p-4 flex justify-start flex-col space-y-16">
            <div>
              <h3 className="font-sans text-3xl font-bold">Maya Krasovsky</h3>
              <p className="font-sans font-bold text-blue">COO/CFO</p>
            </div>
            <p>
              Maya has experience in portfolio management, including alternative
              investments, at Advocate Aurora Health&apos;s $18 bln + fund,
              global compliance, and investment banking at Goldman Sachs. She
              worked with PrimeDAO and contributed to LiftUp. Studied Economics
              and Sociology at The University of Chicago.
            </p>
          </div>
        </div>
        {/* Middle row */}
        <div className="flex flex-col md:flex-row min-w-0 w-full md:space-x-[3px] md:mb-[3px]">
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col justify-start basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Olive Gardner</h3>
              <p className="font-sans font-bold text-blue">
                Operations Manager
              </p>
            </div>
            <p>
              Olive studied Philosophy and Public Policy at The University of
              Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col justify-start basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">
                Vitaly Gachkovsky
              </h3>
              <p className="font-sans font-bold text-blue">
                Head of Design and Marketing
              </p>
            </div>
            <p>
              Vitaly was a Content Producer at{" "}
              <a href="https://w1d1.com" target="_blank" rel="noreferrer">W1D1</a> and the Art director at Svoimi
              Slovami. He studied Design and Programming at HSE Art and Design
              School.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col justify-start basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Ita Caroline</h3>
              <p className="font-sans font-bold text-blue">
                Lead Product Manager
              </p>
            </div>
            <p>
              Ita worked as a Project Manager at Tempus Labs on{" "}
              <a href="https://www.tempus.com/news/pr/tempus-submits-pma-application-to-the-fda-for-its-xt-onco-assay/" target="_blank" rel="noreferrer">
                xT-Onco
              </a>{" "}
              and Algos Team. She studied Economics at The University of
              Chicago.
            </p>
          </div>
        </div>
        {/* Bottom row */}
        <div className="flex flex-col md:flex-row min-w-0 w-full mb-4 md:space-x-[3px]">
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] md:rounded-bl-none rounded-xl p-4 flex flex-col basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Alex Miller</h3>
              <p className="font-sans font-bold text-blue">
                Software Developer
              </p>
            </div>
            <p>
              Alex was a Software Developer at{" "}
              <a href="https://arxiv.org/abs/2112.09618" target="_blank" rel="noreferrer">UCIRC</a> and a
              Full-Stack Intern at{" "}
              <a href="https://www.datamola.com" target="_blank" rel="noreferrer">Datamola</a>. He graduated
              Computer Science at The University of Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl p-4 flex flex-col basis-1/3 mb-[1px] md:mb-0 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Jonah Kaye</h3>
              <p className="font-sans font-bold text-blue">
                Software Developer
              </p>
            </div>
            <p>
              Jonah worked as a researcher at{" "}
              <a href="https://lucian.uchicago.edu/blogs/literarynetworks/" target="_blank" rel="noreferrer">Chicago Text Lab</a> and interned at{" "}<a href="https://readcoop.eu/" target="_blank" rel="noreferrer">READ-COOP</a>. He studied Computer Science and Philosophy at The University of Chicago.
            </p>
          </div>
          <div className="shadow-[0_0_0_1px] md:shadow-[0_0_0_2px] rounded-xl md:rounded-br-none p-4 flex flex-col basis-1/3 space-y-8">
            <div>
              <h3 className="font-sans text-3xl font-bold">Want to be listed here?</h3>
            </div>
            <Button
              href="https://banyan-storage-inc.breezy.hr"
              text="Join the team!"
              primary
            />
          </div>
        </div>
      </div>
      {/* News */}
      {/* <div id="news" className="flex flex-col pt-32">
        <h2 className="text-center text-blue text-7xl font-bold font-head uppercase tracking-tighter mb-16">
          News
        </h2>
      </div> */}
      {/* Newsletter */}
      <div
        id="newsletter"
        className="flex flex-col my-40 md:my-60 justify-center items-center space-y-12"
      >
        <h2 className="font-semibold text-blue font-body text-[40px] md:text-8xl tracking-tighter max-w-[9ch] md:max-w-[15ch] text-center leading-[0.85]">
          Learn more and become an early user
        </h2>
        <p>Join our newsletter to keep in touch.</p>
        <div class="ml-embedded" data-form="fGxfSQ"></div>
        <div className= "invisible" dangerouslySetInnerHTML={{ __html: myHTML }}/>
      </div>
    </Container>
  );
}
