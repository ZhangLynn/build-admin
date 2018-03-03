
import React from 'react';
import { Icon} from 'antd';
import FlagIconFactory from 'react-flag-icon-css'
const FlagIcon = FlagIconFactory(React, { useCssModules: false });


let end = null;

class Location extends React.Component{
    componentWillReceiveProps (next) {
        if(next.type==='0'){
            let data = next.data;
            if(data.netinfo.geoip_id_resp_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code_cn==="中国"){
                if(data.netinfo.geoip_id_resp_h.city_name===undefined){
                    if(data.netinfo.geoip_id_resp_h.province.toString()==="香港"||data.netinfo.geoip_id_resp_h.province.toString()==="台湾"||data.netinfo.geoip_id_resp_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.netinfo.geoip_id_resp_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.netinfo.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_resp_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.netinfo.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_resp_h.province+"-"+data.netinfo.geoip_id_resp_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.netinfo.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_resp_h.country_code_cn}</div>
            }
        }
        if(next.type==='1'){
            let data = next.data;
            if(data.netinfo.geoip_id_orig_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code_cn==="中国"){
                if(data.netinfo.geoip_id_orig_h.city_name===undefined){
                    if(data.netinfo.geoip_id_orig_h.province.toString()==="香港"||data.netinfo.geoip_id_orig_h.province.toString()==="台湾"||data.netinfo.geoip_id_orig_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.netinfo.geoip_id_orig_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.netinfo.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_orig_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.netinfo.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_orig_h.province+"-"+data.netinfo.geoip_id_orig_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.netinfo.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_orig_h.country_code_cn}</div>
            }
        }
        if(next.type==='2'){
            let data = next.data;
            if(data.geoip_id_resp_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code_cn==="中国"){
                if(data.geoip_id_resp_h.city_name===undefined){
                    if(data.geoip_id_resp_h.province.toString()==="香港"||data.geoip_id_resp_h.province.toString()==="台湾"||data.geoip_id_resp_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.geoip_id_resp_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.province+"-"+data.geoip_id_resp_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.country_code_cn}</div>
            }
        }
        if(next.type==='3'){
            let data = next.data;
            if(data.geoip_id_orig_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code_cn==="中国"){
                if(data.geoip_id_orig_h.city_name===undefined){
                    if(data.geoip_id_orig_h.province.toString()==="香港"||data.geoip_id_orig_h.province.toString()==="台湾"||data.geoip_id_orig_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.geoip_id_orig_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_orig_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_orig_h.province+"-"+data.geoip_id_orig_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_orig_h.country_code_cn}</div>
            }
        }
        if(next.type==='4'){
            let data = next.data;
            if(data.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.country_code_cn==="中国"){
                if(data.city_name===undefined){
                    if(data.province.toString()==="香港"||data.province.toString()==="台湾"||data.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.country_code.toLowerCase()}/>&nbsp;{data.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.country_code.toLowerCase()}/>&nbsp;{data.province+"-"+data.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.country_code.toLowerCase()}/>&nbsp;{data.country_code_cn}</div>
            }
        }
        if(next.type==='5'){
            let data = next.data;
            if(data.answer_section===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code_cn==="中国"){
                if(data.answer_section[0].city_name===undefined){
                    if(data.answer_section[0].province.toString()==="香港"||data.answer_section[0].province.toString()==="台湾"||data.answer_section[0].province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.answer_section[0].province}</div>
                    }else{
                        end=<div><FlagIcon code={data.answer_section[0].country_code.toLowerCase()}/>&nbsp;{data.answer_section[0].province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.answer_section[0].country_code.toLowerCase()}/>&nbsp;{data.answer_section[0].province+"-"+data.answer_section[0].city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.answer_section[0].country_code.toLowerCase()}/>&nbsp;{data.answer_section[0].country_code_cn}</div>
            }
        }
        if(next.type==='6'){
            let data = next.data;
            let index = next.index;
            // console.log(data)
            if(data.domain_info===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index] === undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code_cn==="中国"){
                if(data.domain_info[index].city_name===undefined){
                    if(data.domain_info[index].province.toString()==="香港"||data.domain_info[index].province.toString()==="台湾"||data.domain_info[index].province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.domain_info[index].province}</div>
                    }else{
                        end=<div><FlagIcon code={data.domain_info[index].country_code.toLowerCase()}/>&nbsp;{data.domain_info[index].province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.domain_info[index].country_code.toLowerCase()}/>&nbsp;{data.domain_info[index].province+"-"+data.domain_info[index].city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.domain_info[index].country_code.toLowerCase()}/>&nbsp;{data.domain_info[index].country_code_cn}</div>
            }
        }
        if(next.type==='malip'){
            let data = next.data;
            // let index = next.index;
            // console.log(data)
            if(data.netinfo.mal_ip_info===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info === undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code_cn==="中国"){
                if(data.netinfo.mal_ip_info.city_name===undefined){
                    if(data.netinfo.mal_ip_info.province.toString()==="香港"||data.netinfo.mal_ip_info.province.toString()==="台湾"||data.netinfo.mal_ip_info.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.netinfo.mal_ip_info.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.netinfo.mal_ip_info.country_code.toLowerCase()}/>&nbsp;{data.netinfo.mal_ip_info.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.netinfo.mal_ip_info.country_code.toLowerCase()}/>&nbsp;{data.netinfo.mal_ip_info.province+"-"+data.netinfo.mal_ip_info.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.netinfo.mal_ip_info.country_code.toLowerCase()}/>&nbsp;{data.netinfo.mal_ip_info.country_code_cn}</div>
            }
        }
    };

    componentWillMount(){
        if(this.props.type==='0'){
            let data = this.props.data;
            if(data.netinfo.geoip_id_resp_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_resp_h.country_code_cn==="中国"){
                if(data.netinfo.geoip_id_resp_h.city_name===undefined){
                    if(data.netinfo.geoip_id_resp_h.province.toString()==="香港"||data.netinfo.geoip_id_resp_h.province.toString()==="台湾"||data.netinfo.geoip_id_resp_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.netinfo.geoip_id_resp_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.netinfo.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_resp_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.netinfo.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_resp_h.province+"-"+data.netinfo.geoip_id_resp_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.netinfo.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_resp_h.country_code_cn}</div>
            }
        }
        if(this.props.type==='1'){
            let data = this.props.data;
            if(data.netinfo.geoip_id_orig_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.geoip_id_orig_h.country_code_cn==="中国"){
                if(data.netinfo.geoip_id_orig_h.city_name===undefined){
                    if(data.netinfo.geoip_id_orig_h.province.toString()==="香港"||data.netinfo.geoip_id_orig_h.province.toString()==="台湾"||data.netinfo.geoip_id_orig_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.netinfo.geoip_id_orig_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.netinfo.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_orig_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.netinfo.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_orig_h.province+"-"+data.netinfo.geoip_id_orig_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.netinfo.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.netinfo.geoip_id_orig_h.country_code_cn}</div>
            }
        }
        if(this.props.type==='2'){
            let data = this.props.data;
            if(data.geoip_id_resp_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_resp_h.country_code_cn==="中国"){
                if(data.geoip_id_resp_h.city_name===undefined){
                    if(data.geoip_id_resp_h.province.toString()==="香港"||data.geoip_id_resp_h.province.toString()==="台湾"||data.geoip_id_resp_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.geoip_id_resp_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.province+"-"+data.geoip_id_resp_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.geoip_id_resp_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.country_code_cn}</div>
            }
        }
        if(this.props.type==='3'){
            let data = this.props.data;
            if(data.geoip_id_orig_h===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.geoip_id_orig_h.country_code_cn==="中国"){
                if(data.geoip_id_orig_h.city_name===undefined){
                    if(data.geoip_id_orig_h.province.toString()==="香港"||data.geoip_id_orig_h.province.toString()==="台湾"||data.geoip_id_orig_h.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.geoip_id_orig_h.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_resp_h.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_orig_h.province+"-"+data.geoip_id_orig_h.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.geoip_id_orig_h.country_code.toLowerCase()}/>&nbsp;{data.geoip_id_orig_h.country_code_cn}</div>
            }
        }
        if(this.props.type==='4'){
            let data = this.props.data;
            if(data.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.country_code_cn==="中国"){
                if(data.city_name===undefined){
                    if(data.province.toString()==="香港"||data.province.toString()==="台湾"||data.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.country_code.toLowerCase()}/>&nbsp;{data.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.country_code.toLowerCase()}/>&nbsp;{data.province+"-"+data.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.country_code.toLowerCase()}/>&nbsp;{data.country_code_cn}</div>
            }
        }
        if(this.props.type==='5'){
            let data = this.props.data.netinfo;
            if(data.answer_section===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.answer_section[0].country_code_cn==="中国"){
                if(data.answer_section[0].city_name===undefined){
                    if(data.answer_section[0].province.toString()==="香港"||data.answer_section[0].province.toString()==="台湾"||data.answer_section[0].province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.answer_section[0].province}</div>
                    }else{
                        end=<div><FlagIcon code={data.answer_section[0].country_code.toLowerCase()}/>&nbsp;{data.answer_section[0].province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.answer_section[0].country_code.toLowerCase()}/>&nbsp;{data.answer_section[0].province+"-"+data.answer_section[0].city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.answer_section[0].country_code.toLowerCase()}/>&nbsp;{data.answer_section[0].country_code_cn}</div>
            }
        }
        if(this.props.type==='6'){
            let data = this.props.data;
            let index = this.props.index;
            if(data.domain_info===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index] === undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.domain_info[index].country_code_cn==="中国"){
                if(data.domain_info[index].city_name===undefined){
                    if(data.domain_info[index].province.toString()==="香港"||data.domain_info[index].province.toString()==="台湾"||data.domain_info[index].province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.domain_info[index].province}</div>
                    }else{
                        end=<div><FlagIcon code={data.domain_info[index].country_code.toLowerCase()}/>&nbsp;{data.domain_info[index].province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.domain_info[index].country_code.toLowerCase()}/>&nbsp;{data.domain_info[index].province+"-"+data.domain_info[index].city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.domain_info[index].country_code.toLowerCase()}/>&nbsp;{data.domain_info[index].country_code_cn}</div>
            }
        }
        if(this.props.type==='malip'){
            let data = this.props.data;
            // let index = next.index;
            // console.log(data)
            if(data.netinfo.mal_ip_info===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info === undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code_cn===undefined){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code_cn==="局域网"){
                end=<div><Icon type="desktop" />局域网</div>
            }else if(data.netinfo.mal_ip_info.country_code_cn==="中国"){
                if(data.netinfo.mal_ip_info.city_name===undefined){
                    if(data.netinfo.mal_ip_info.province.toString()==="香港"||data.netinfo.mal_ip_info.province.toString()==="台湾"||data.netinfo.mal_ip_info.province.toString()==="澳门"){
                        end=<div><FlagIcon code="cn"/>&nbsp;{"中国-"+data.netinfo.mal_ip_info.province}</div>
                    }else{
                        end=<div><FlagIcon code={data.netinfo.mal_ip_info.country_code.toLowerCase()}/>&nbsp;{data.netinfo.mal_ip_info.province}</div>
                    }
                }else{
                    end=<div><FlagIcon code={data.netinfo.mal_ip_info.country_code.toLowerCase()}/>&nbsp;{data.netinfo.mal_ip_info.province+"-"+data.netinfo.mal_ip_info.city_name}</div>
                }
            }else{
                end=<div><FlagIcon code={data.netinfo.mal_ip_info.country_code.toLowerCase()}/>&nbsp;{data.netinfo.mal_ip_info.country_code_cn}</div>
            }
        }
    }


    render(){
        return(
            end
        )
    }
}

export default Location