import { ComponentProps } from 'solid-js';
const PREFIX = 'road-ui';
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
                obj[getClass(item,prefix)] = true;
            } else if (Array.isArray(item)) {
                item.forEach(i => obj[getClass(i,prefix)] = true);
            } else if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
                Object.keys(item).forEach((key) => {
                    obj[getClass(key,prefix)] = !!item[key];
                });
            }
        })
    }
    return obj;
}
const getClass=(c:string,prefix:string)=>{
    const prefixCls = prefix ? `${PREFIX}-${prefix}` : PREFIX;
    return `${prefixCls}-${c}`;
}