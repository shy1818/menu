import React, { Component } from 'react'
import {
    ClassifyTabContent
} from './styledComponent'
import ClassifyContent from './contents'
import { wrapperAnimate }  from '@hoc'
class ClassifyFood extends Component {

    render () {
        return (
            <ClassifyTabContent>
                <ClassifyContent />
            </ClassifyTabContent>
        )
    }

}

export default wrapperAnimate(ClassifyFood)