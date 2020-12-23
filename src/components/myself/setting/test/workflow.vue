
<template>
    <div>
        <workflow
                :data="data"
                @ok="ok"
        />
    </div>
</template>
<script>
    import workflow from 'workflow-ui/src/components/Generator'
    import 'workflow-ui/lib/workflow-ui.css'
    export default {
        components: {
            workflow
        },
        data () {
            return {
                data: {
                    title: '请假',
                    node: {
                        name: '发起人',
                        type: 'start',
                        nodeId: 'sid-startevent',
                        childNode: {}
                    }
                }
            }
        },
        methods: {
            ok (data) {
                console.log(data)
            }
        }
    }
</script>
 