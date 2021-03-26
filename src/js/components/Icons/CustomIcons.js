import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.number,
};

const iconPropTypes = {
  ...propTypes,
  value: PropTypes.bool
}

const multiSelectPropTypes = {
  ...propTypes,
  options: PropTypes.arrayOf(PropTypes.number)
}

const defaultMultiSelectOptions = [12, 16, 20, 24, 28, 32];

export const PlusIcon = props => (
  <span onClick={props.onClick}
    className={`custom-fa ${props.className} fontsize-icon`}>
    +
  </span>
);
PlusIcon.propTypes = propTypes;

const fontControlCommonStyles = {
  height: '42px',
  marginBottom: 0,
  textAlignLast: 'center',
  width: 'inherit',
}
export const SizeControl = props => {
  const { options = defaultMultiSelectOptions, className, onChange, value } = props;

  return (
    <select
      className={`custom-fa ${className}`}
      style={{ ...fontControlCommonStyles }}
      onChange={(e) => {
        const updatedSize = e.currentTarget.value;
        onChange(updatedSize)
      }
      }
      value={value}>
      {options.map(val => <option key={val}>{val}</option>)}
    </select >
  )
}
SizeControl.propTypes = multiSelectPropTypes;

export const MinusIcon = props => (
  <span onClick={props.onClick}
    className={`custom-fa ${props.className} fontsize-icon`}>
    -
  </span>
)
MinusIcon.propTypes = propTypes;

export const AlignCenterIcon = props => (
  <span onClick={props.onClick} className={`${props.className} ${props.value ? 'enabled' : ''}`}>
    <svg id="Layer" enableBackground="new 0 0 64 64" height="18" viewBox="0 0 64 64" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z" /><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z" /><path d="m46 23c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z" /><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z" /><path d="m46 45c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z" /></svg>
  </span>
);
AlignCenterIcon.propTypes = iconPropTypes;

export const AlignLeftIcon = props => (
  <span onClick={props.onClick} className={`${props.className} ${props.value ? 'enabled' : ''}`}>
    <svg id="Layer" enableBackground="new 0 0 64 64" height="18" viewBox="0 0 64 64" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m54 8h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z" /><path d="m54 52h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z" /><path d="m10 23h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z" /><path d="m54 30h-44c-1.104 0-2 .896-2 2s.896 2 2 2h44c1.104 0 2-.896 2-2s-.896-2-2-2z" /><path d="m10 45h28c1.104 0 2-.896 2-2s-.896-2-2-2h-28c-1.104 0-2 .896-2 2s.896 2 2 2z" /></svg>
  </span>
);
AlignLeftIcon.propTypes = iconPropTypes;

export const LarivaarIcon = props => (
  <span onClick={props.onClick} className={`${props.className} ${props.value ? 'enabled' : ''}`}>ੳਅ</span>
);
LarivaarIcon.propTypes = iconPropTypes;

export const LarivaarAssistIcon = props => (
  <span onClick={props.onClick} className={`${props.className} custom-fa-assist ${props.value ? 'enabled' : ''}`}>ੳ</span>
);
LarivaarAssistIcon.propTypes = iconPropTypes;

export const SplitViewIcon = props => (
  <span onClick={props.onClick} className={props.className}>
    <svg version="1.1" id="Capa_1"
      viewBox="0 0 512 512" enableBackground="new 0 0 512 512;" width="20" height="20"
      style={{ 'transform': 'rotate(90deg)', 'padding': '2px' }}>
      <g><g>
        <path d="M506.24,243.712l-96-80c-4.768-3.968-11.424-4.8-17.024-2.176C387.584,164.128,384,169.792,384,176v64h-64V16
			c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v480c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16V272h64v64
			c0,6.208,3.584,11.84,9.216,14.496c2.144,0.992,4.48,1.504,6.784,1.504c3.68,0,7.328-1.248,10.24-3.712l96-80
			c3.68-3.04,5.76-7.552,5.76-12.288C512,251.264,509.92,246.752,506.24,243.712z"/>
      </g>
      </g>
      <g>
        <g>
          <path d="M208,0c-8.832,0-16,7.168-16,16v224h-64v-64c0-6.208-3.584-11.872-9.216-14.496c-5.568-2.592-12.256-1.76-17.024,2.208
			l-96,80C2.112,246.752,0,251.264,0,256c0,4.736,2.112,9.248,5.76,12.288l96,80c2.912,2.464,6.56,3.712,10.24,3.712
			c2.304,0,4.64-0.512,6.784-1.504C124.416,347.84,128,342.208,128,336v-64h64v224c0,8.832,7.168,16,16,16c8.832,0,16-7.168,16-16
			V16C224,7.168,216.832,0,208,0z"/>
        </g></g>
    </svg>
  </span>
);
SplitViewIcon.propTypes = iconPropTypes;

export const ParagraphIcon = props => (
  <span
    onClick={props.onClick}
    className={`custom-fa ${props.value ? 'enabled' : ''}`}>
    <svg
      transform="scale(1.4)"
      width="25px"
      height="25px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96">
      <path d="M75.5 20.5H35c-8 0-14.5 6.5-14.5 14.5S27 49.6 35 49.6h11v25.9h3.7V24.2h7.4v51.3h3.7V24.2h14.6v-3.7zM46.1 45.9H35c-6 0-10.9-4.9-10.9-10.9S29 24.1 35 24.1h11v21.8z" />
    </svg>
  </span>
)

ParagraphIcon.propTypes = iconPropTypes;

export const GearsIcon = props => (
  <span onClick={props.onClick} className="gear-icon">
    <svg height="1em" viewBox="0 0 512 512" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="m256 133.609375c-67.484375 0-122.390625 54.90625-122.390625 122.390625s54.90625 122.390625 122.390625 122.390625 122.390625-54.90625 122.390625-122.390625-54.90625-122.390625-122.390625-122.390625zm0 214.183594c-50.613281 0-91.792969-41.179688-91.792969-91.792969s41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969-41.179688 91.792969-91.792969 91.792969zm0 0" /><path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-18.550781 89.3125-36.082032 7.84375c-5.542968 1.207031-9.964843 5.378906-11.488281 10.839844-3.964843 14.222656-9.667969 27.976562-16.949219 40.878906-2.789062 4.941406-2.617187 11.019531.453126 15.792969l19.980468 31.078125-43.863281 43.867187-31.082031-19.980468c-4.773438-3.070313-10.851563-3.242188-15.789063-.453126-12.90625 7.28125-26.660156 12.984376-40.882812 16.949219-5.460938 1.523438-9.632813 5.945313-10.839844 11.488281l-7.84375 36.082032h-62.03125l-7.84375-36.082032c-1.207031-5.542968-5.378906-9.964843-10.839844-11.488281-14.222656-3.964843-27.976562-9.667969-40.878906-16.949219-4.941406-2.789062-11.019531-2.613281-15.792969.453126l-31.078125 19.980468-43.863281-43.867187 19.976562-31.078125c3.070313-4.773438 3.246094-10.851563.457032-15.792969-7.28125-12.902344-12.984375-26.65625-16.953125-40.878906-1.523438-5.460938-5.941407-9.632813-11.484375-10.839844l-36.085938-7.84375v-62.03125l36.082032-7.84375c5.542968-1.207031 9.964843-5.378906 11.488281-10.839844 3.964843-14.222656 9.667969-27.976562 16.949219-40.878906 2.789062-4.941406 2.617187-11.019531-.453126-15.792969l-19.980468-31.078125 43.863281-43.867187 31.082031 19.980468c4.773438 3.070313 10.851563 3.242188 15.789063.453126 12.90625-7.28125 26.660156-12.984376 40.882812-16.949219 5.460938-1.523438 9.632813-5.945313 10.839844-11.488281l7.84375-36.082032h62.03125l7.84375 36.082032c1.207031 5.542968 5.378906 9.964843 10.839844 11.488281 14.222656 3.964843 27.976562 9.667969 40.878906 16.949219 4.941406 2.789062 11.019531 2.613281 15.792969-.453126l31.078125-19.980468 43.863281 43.867187-19.976562 31.078125c-3.070313 4.773438-3.246094 10.851563-.457032 15.792969 7.285156 12.902344 12.984375 26.65625 16.953125 40.878906 1.523438 5.460938 5.941407 9.632813 11.484375 10.839844l36.085938 7.84375zm0 0" />
    </svg>
  </span>
)
GearsIcon.propTypes = iconPropTypes;

export const DownArrowIcon = () => (
  <span className={`downarrow-key`}>
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='10' height='10' viewBox='0 0 32 24'>
      <polygon points='0,0 32,0 16,24'></polygon>
    </svg>
  </span>
)

export const SolidArrowRight = () => (
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="12px" width="12px"
    viewBox="0 0 386.258 386.258">
    <polygon points="96.879,0 96.879,386.258 289.379,193.129 " />
  </svg>
)


export const IconLabel = props => (
  <span>{props.value}</span>
)
IconLabel.propTypes = {
  value: PropTypes.number
};


export const GlobeIcon = () => (
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 31.416 31.416">
    <g>
      <path d="M28.755,6.968l-0.47,0.149L25.782,7.34l-0.707,1.129l-0.513-0.163L22.57,6.51l-0.289-0.934L21.894,4.58l-1.252-1.123
			l-1.477-0.289l-0.034,0.676l1.447,1.412l0.708,0.834L20.49,6.506l-0.648-0.191L18.871,5.91l0.033-0.783l-1.274-0.524l-0.423,1.841
			l-1.284,0.291l0.127,1.027l1.673,0.322l0.289-1.641l1.381,0.204l0.642,0.376h1.03l0.705,1.412l1.869,1.896l-0.137,0.737
			l-1.507-0.192l-2.604,1.315l-1.875,2.249l-0.244,0.996h-0.673l-1.254-0.578l-1.218,0.578l0.303,1.285l0.53-0.611l0.932-0.029
			l-0.065,1.154l0.772,0.226l0.771,0.866l1.259-0.354l1.438,0.227l1.67,0.449l0.834,0.098l1.414,1.605l2.729,1.605l-1.765,3.372
			l-1.863,0.866l-0.707,1.927l-2.696,1.8l-0.287,1.038c6.892-1.66,12.019-7.851,12.019-15.253
			C31.413,12.474,30.433,9.465,28.755,6.968z"/>
      <path d="M17.515,23.917l-1.144-2.121l1.05-2.188l-1.05-0.314l-1.179-1.184l-2.612-0.586l-0.867-1.814v1.077h-0.382l-2.251-3.052
			v-2.507L7.43,8.545L4.81,9.012H3.045L2.157,8.43L3.29,7.532L2.16,7.793c-1.362,2.326-2.156,5.025-2.156,7.916
			c0,8.673,7.031,15.707,15.705,15.707c0.668,0,1.323-0.059,1.971-0.137l-0.164-1.903c0,0,0.721-2.826,0.721-2.922
			C18.236,26.357,17.515,23.917,17.515,23.917z"/>
      <path d="M5.84,5.065l2.79-0.389l1.286-0.705l1.447,0.417l2.312-0.128l0.792-1.245l1.155,0.19l2.805-0.263L19.2,2.09l1.09-0.728
			l1.542,0.232l0.562-0.085C20.363,0.553,18.103,0,15.708,0C10.833,0,6.474,2.222,3.596,5.711h0.008L5.84,5.065z M16.372,1.562
			l1.604-0.883l1.03,0.595l-1.491,1.135l-1.424,0.143l-0.641-0.416L16.372,1.562z M11.621,1.691l0.708,0.295l0.927-0.295
			l0.505,0.875l-2.14,0.562l-1.029-0.602C10.591,2.526,11.598,1.878,11.621,1.691z"/>
    </g>
  </svg>
)

export const MicrophoneIcon = () => (
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 475.085 475.085" >
    <g>
      <path d="M237.541,328.897c25.128,0,46.632-8.946,64.523-26.83c17.888-17.884,26.833-39.399,26.833-64.525V91.365
			c0-25.126-8.938-46.632-26.833-64.525C284.173,8.951,262.669,0,237.541,0c-25.125,0-46.632,8.951-64.524,26.84
			c-17.893,17.89-26.838,39.399-26.838,64.525v146.177c0,25.125,8.949,46.641,26.838,64.525
			C190.906,319.951,212.416,328.897,237.541,328.897z"/>
      <path d="M396.563,188.15c-3.606-3.617-7.898-5.426-12.847-5.426c-4.944,0-9.226,1.809-12.847,5.426
			c-3.613,3.616-5.421,7.898-5.421,12.845v36.547c0,35.214-12.518,65.333-37.548,90.362c-25.022,25.03-55.145,37.545-90.36,37.545
			c-35.214,0-65.334-12.515-90.365-37.545c-25.028-25.022-37.541-55.147-37.541-90.362v-36.547c0-4.947-1.809-9.229-5.424-12.845
			c-3.617-3.617-7.895-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426c-3.618,3.616-5.426,7.898-5.426,12.845v36.547
			c0,42.065,14.04,78.659,42.112,109.776c28.073,31.118,62.762,48.961,104.068,53.526v37.691h-73.089
			c-4.949,0-9.231,1.811-12.847,5.428c-3.617,3.614-5.426,7.898-5.426,12.847c0,4.941,1.809,9.233,5.426,12.847
			c3.616,3.614,7.898,5.428,12.847,5.428h182.719c4.948,0,9.236-1.813,12.847-5.428c3.621-3.613,5.431-7.905,5.431-12.847
			c0-4.948-1.81-9.232-5.431-12.847c-3.61-3.617-7.898-5.428-12.847-5.428h-73.08v-37.691
			c41.299-4.565,75.985-22.408,104.061-53.526c28.076-31.117,42.12-67.711,42.12-109.776v-36.547
			C401.998,196.049,400.185,191.77,396.563,188.15z"/>
    </g>
  </svg>
)
