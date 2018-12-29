import React, { Component } from 'react'
import {
    ClassifyTabContent
} from './styledComponent'
import ClassifyContent from './contents'
import { wrapperAnimate }  from '@hoc'


class ClassifyMenu extends Component {

    render () {
        return (
            <ClassifyTabContent>
                <ClassifyContent />
            </ClassifyTabContent>
        )
    }

}

export default wrapperAnimate(ClassifyMenu)