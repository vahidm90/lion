import { Constructor } from '@open-wc/dedupe-mixin';
import { FormRegistrarHost } from './FormRegistrarMixinTypes';

import { LitElement } from '@lion/core';

export declare class FormRegisteringHost {
  name: string;
  protected _parentFormGroup: FormRegistrarHost | undefined;
}

export declare function FormRegisteringImplementation<T extends Constructor<LitElement>>(
  superclass: T,
): T &
  Constructor<FormRegisteringHost> &
  Pick<typeof FormRegisteringHost, keyof typeof FormRegisteringHost> &
  Pick<typeof LitElement, keyof typeof LitElement>;

export type FormRegisteringMixin = typeof FormRegisteringImplementation;
