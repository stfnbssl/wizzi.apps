/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\PageMetadata.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import * as React from 'react';
import {Helmet} from 'react-helmet-async';
type Props = { 
    name: string;
    description: string;
    id?: string;
};
export function getPageMetadata(props: Props) {

    const title = `${props.name} - Packi`;
    const description = props.description;
    const url = `${process.env.PACKI_SERVER_URL}${
    props.id
     ? `/${props.id}`
     : ''}
    `;
    const image = 'https://s3.amazonaws.com/exp-brand-assets/PackiIcon_200.png';
    const meta = [
        {
            name: 'description', 
            content: description
         }, 
        
        // Open graph
        {
            property: 'og:url', 
            content: url
         }, 
        {
            property: 'og:title', 
            content: title
         }, 
        {
            property: 'og:description', 
            content: description
         }, 
        {
            property: 'og:type', 
            content: 'website'
         }, 
        {
            property: 'og:image', 
            content: image
         }, 
        {
            property: 'og:image:width', 
            content: '200'
         }, 
        {
            property: 'og:image:height', 
            content: '200'
         }, 
        
        // Twitter
        {
            name: 'twitter:card', 
            content: 'summary'
         }, 
        {
            name: 'twitter:site', 
            content: '@expo'
         }, 
        {
            name: 'twitter:title', 
            content: title
         }, 
        {
            name: 'twitter:description', 
            content: description
         }, 
        {
            name: 'twitter:image', 
            content: image
         }
    ];
    return {
            title, 
            description, 
            url, 
            meta
         };
}
export default function PageMetadata(props: Props) {
    
        const {
            title, 
            meta
         } = getPageMetadata(props);
        return  (
            <Helmet
             title={title} meta={meta} />
            )
        ;
    }
