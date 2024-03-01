import { ComponentProps } from 'solid-js';
const PREFIX = 'rui';
export default function useClassList(props: ComponentProps<any>,prefix:string, ...customClassList: any[]) {
    let obj = {
        ...props.classList,
    };
    if (props.class) {
        obj[props.class] = true;
    }
    if(prefix){
        obj[`${PREFIX}-${prefix}`] = true;
    }
    if (customClassList) {
        customClassList.forEach((item:any)=> {
            if (typeof item === 'string') {
                obj[getClass(item)] = true;
            } else if (Array.isArray(item)) {
                item.forEach(i => obj[getClass(i)] = true);
            } else if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
                Object.keys(item).forEach((key) => {
                    obj[getClass(key)] = !!item[key];
                });
            }
        })
    }
    return obj;
}
const getClass=(c:string)=>{
    const prefixCls = PREFIX;
    return `${prefixCls}-${c}`;
}