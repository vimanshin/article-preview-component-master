export default {
  rules: {
    // — Опечатки и несуществующие значения —
    'color-no-invalid-hex': true,
    'property-no-unknown': true,
    'unit-no-unknown': true,
    'function-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'media-feature-name-no-unknown': true,

    // — Дублирование и порядок —
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'no-duplicate-selectors': true,
    'no-invalid-position-at-import-rule': true,
    'no-descending-specificity': true,

    // — Синтаксис и нотация —
    'color-function-notation': 'modern',
    'alpha-value-notation': 'number',
    'length-zero-no-unit': true,
    'import-notation': 'url',
    'shorthand-property-no-redundant-values': true,

    // — Качество кода —
    'declaration-no-important': true,
    'declaration-property-value-no-unknown': true,
    'comment-no-empty': true,
    'no-unknown-animations': true,

    // — Именование —
    'selector-class-pattern': null,
  },
};
