import { Errors } from '@/js/constants.js';

/**
 * @template T
 * @typedef {(node: HTMLElement, options: Partial<T>) => Partial<{
 *  update: (newOptions: Partial<T>) => void,
 *  destroy: () => void
 * }>} Action
 */

const replaceableElementDefaultOptions = {
  ogchar: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: (/** @type {string} */ _key, _detail = {}) => {},
  disabled: false,
};

/** @type {Action<typeof replaceableElementDefaultOptions>} */
export const replaceableElement = (node, options_ = {}) => {
  let options = /** @type {typeof replaceableElementDefaultOptions} */ ({
    ...options_,
    replaceableElementDefaultOptions,
  });
  const { dispatch } = options;

  const setProperties = () => {
    node.style.setProperty(
      'pointer-events',
      options.disabled ? 'none' : 'auto'
    );
    node.setAttribute('tabindex', options.disabled ? '-1' : '0');
    node.setAttribute('contenteditable', options.disabled ? 'false' : 'true');
  };

  setProperties();

  /** @type {(e: KeyboardEvent) => void} */
  const onKeyDown = (e) => {
    if (options.disabled) return;

    // prevent the letters from being prepended to div on android
    node.setAttribute('contenteditable', 'false');

    if (options.ogchar === e.key.toUpperCase()) {
      dispatch('error', {
        id: Errors.NO_SELF_DECODE,
        msg: 'Letters cannot decode to themselves',
      });
      return;
    }

    dispatch('replace', {
      from: options.ogchar,
      to: e.key.toUpperCase(),
    });
  };

  const onFocus = () => {
    // it may have been set to false if it went through keydown before
    node.setAttribute('contenteditable', 'true');
  };

  node.addEventListener('keydown', onKeyDown);
  node.addEventListener('focus', onFocus);

  return {
    update(newOptions) {
      options = { ...options, ...newOptions };
      setProperties();
    },

    destroy() {
      node.removeEventListener('keydown', onKeyDown);
      node.removeEventListener('focus', onFocus);
    },
  };
};